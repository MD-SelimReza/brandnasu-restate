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

    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        first_name: { label: 'First Name', type: 'text' },
        last_name: { label: 'Last Name', type: 'text' },
        magic: { label: 'Magic Login', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email) throw new Error('Missing email');

        await connectDB();
        const user = await UserModel.findOne({ email: credentials.email });

        if (!user) throw new Error('User not found');

        const normalizedEmail = credentials?.email.toLowerCase();
        const superAdminEmail = process.env.SUPERADMIN_EMAIL?.toLowerCase();

        console.log(normalizedEmail, superAdminEmail, 'isSuperAdminEmail');

        const isSuperAdminEmail = normalizedEmail === superAdminEmail;

        if (credentials.magic === 'true') {
          return {
            id: user._id.toString(),
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            role: isSuperAdminEmail ? 'superadmin' : 'admin',
          };
        }

        if (!credentials.password) throw new Error('Missing password');
        const valid = bcrypt.compareSync(
          credentials.password,
          user.password || ''
        );
        if (!valid) throw new Error('Invalid credentials');

        return {
          id: user._id.toString(),
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          role: isSuperAdminEmail ? 'superadmin' : 'admin',
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
        const normalizedEmail = user.email?.toLowerCase();
        const superAdminEmail = process.env.SUPERADMIN_EMAIL?.toLowerCase();

        const isSuperAdminEmail = normalizedEmail === superAdminEmail;

        if (!dbUser) {
          dbUser = await UserModel.create({
            first_name: user.name?.split(' ')[0] || '',
            last_name: user.name?.split(' ')[1] || '',
            email: normalizedEmail,
            image: user.image,
            password: null,
            role: isSuperAdminEmail ? 'superadmin' : 'admin',
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
        token.role = user.role ?? 'admin';
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
