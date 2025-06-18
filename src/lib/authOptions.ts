// import { NextAuthOptions, Session } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
// import UserModel from '@/models/User';
// import { connectDB } from './mongo';
// import bcrypt from 'bcryptjs';
// import { JWT } from 'next-auth/jwt';

// export const authOptions: NextAuthOptions = {
//   providers: [
//     // Google Authentication
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),

//     // Credentials Authentication (SignUp + SignIn)
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//         first_name: { label: 'First Name', type: 'text' },
//         last_name: { label: 'Last Name', type: 'text' },
//       },

//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error('Missing credentials');
//         }

//         const { email, password, first_name, last_name } = credentials;

//         await connectDB();

//         // ✅ If first_name and last_name are present, we treat it as SIGN UP.
//         if (first_name && last_name && email && password) {
//           const existingUser = await UserModel.findOne({ email });

//           if (existingUser) {
//             throw new Error('User already exists');
//           }

//           const hashedPassword = bcrypt.hashSync(password, 10);

//           const newUser = new UserModel({
//             first_name,
//             last_name,
//             email,
//             password: hashedPassword,
//           });

//           await newUser.save();

//           return {
//             id: newUser._id.toString(),
//             first_name: newUser.first_name,
//             last_name: newUser.last_name,
//             email: newUser.email,
//             image: newUser.image || null,
//           };
//         }

//         // ✅ SIGN IN flow if only email and password provided
//         if (email && password) {
//           const user = await UserModel.findOne({ email });

//           if (!user) {
//             throw new Error('User not found');
//           }

//           const isValidPassword = bcrypt.compareSync(
//             password,
//             user.password || ''
//           );

//           if (!isValidPassword) {
//             throw new Error('Invalid credentials');
//           }

//           return {
//             id: user._id.toString(),
//             name: `${user.first_name} ${user.last_name}`,
//             email: user.email,
//             image: user.image || null,
//           };
//         }

//         return null;
//       },
//     }),
//   ],

//   session: {
//     strategy: 'jwt',
//   },

//   callbacks: {
//     // JWT callback runs on sign in / signup and whenever a session is checked.
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email ?? '';
//         token.name = user.name ?? '';
//         token.image = user.image || null;
//       }

//       return token;
//     },

//     // Session callback attaches user data to the session
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email as string;
//         session.user.name = token.name as string;
//         session.user.image = token.image as string | null;
//       }

//       return session;
//     },
//   },

//   pages: {
//     signIn: '/signin',
//     signOut: '/',
//     error: '/',
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import UserModel from '@/models/User';
import { connectDB } from './mongo';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    // Google Authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // Credentials Authentication (SignUp + SignIn)
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        first_name: { label: 'First Name', type: 'text' },
        last_name: { label: 'Last Name', type: 'text' },
      },

      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Missing credentials');
        }

        await connectDB();
        const { email, password, first_name, last_name } = credentials;

        const user = await UserModel.findOne({ email });

        if (first_name && last_name) {
          if (user) throw new Error('User already exists');

          const hashedPassword = bcrypt.hashSync(password, 10);
          const newUser = await UserModel.create({
            first_name,
            last_name,
            email,
            password: hashedPassword,
          });

          return {
            id: newUser._id.toString(),
            name: `${newUser.first_name} ${newUser.last_name}`,
            email: newUser.email,
            image: newUser.image || null,
            role: newUser.role || 'user',
          };
        }

        if (!user) throw new Error('User not found');
        const valid = bcrypt.compareSync(password, user.password || '');
        if (!valid) throw new Error('Invalid credentials');

        return {
          id: user._id.toString(),
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          image: user.image || null,
          role: user.role || 'user',
        };
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account?.provider === 'google') {
        await connectDB();
        let dbUser = await UserModel.findOne({ email: user.email });

        // If user does not exist in DB, create them
        if (!dbUser) {
          const normalizedEmail = user.email?.toLowerCase();
          const isSuperAdminEmail =
            normalizedEmail === 'rezaselim405@gmail.com';

          dbUser = await UserModel.create({
            first_name: user.name?.split(' ')[0] || '',
            last_name: user.name?.split(' ')[1] || '',
            email: normalizedEmail,
            image: user.image,
            password: null,
            role: isSuperAdminEmail ? 'superadmin' : 'user',
          });
        }

        token.id = dbUser._id.toString();
        token.email = dbUser.email;
        token.name = `${dbUser.first_name} ${dbUser.last_name}`;
        token.image = dbUser.image || null;
        token.role = dbUser.role;
      }

      if (user && account?.provider !== 'google') {
        token.id = user.id;
        token.email = user.email!;
        token.name = user.name ?? '';
        token.image = user.image ?? null;
        token.role = user.role ?? 'user';
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email!;
        session.user.name = token.name!;
        session.user.image = token.image ?? null;
        session.user.role = token.role!;
      }
      return session;
    },
  },

  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/',
  },

  secret: process.env.NEXTAUTH_SECRET,
};
