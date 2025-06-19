import { DefaultSession } from 'next-auth';

// Extend the NextAuth Session and User types
declare module 'next-auth' {
  interface User {
    id: string;
    image?: string | null;
    role?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role?: string;
      image?: string | null;
    } & DefaultSession['admin'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    role?: string;
    image?: string | null;
    roles?: string;
  }
}
