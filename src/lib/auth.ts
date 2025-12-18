import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          throw new Error("Invalid credentials");
        }

        console.log("Looking up user:", credentials.email);
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          console.log("User not found:", credentials.email);
          throw new Error("Invalid credentials");
        }

        if (!user.password) {
          console.log("User has no password (likely OAuth user):", credentials.email);
          throw new Error("Invalid credentials");
        }

        console.log("Comparing passwords...");
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          console.log("Incorrect password for:", credentials.email);
          throw new Error("Invalid credentials");
        }

        console.log("Login successful for:", credentials.email);
        // Return user in the format expected by NextAuth
        return {
          id: user.id,
          email: user.email || '',
          name: user.name,
          image: null,
          userType: (user.userType as string) || 'NOT_SET',
          verificationStatus: user.verificationStatus as string,
          subscriptionStatus: (user.subscriptionStatus as string),
          shahadaAccepted: user.shahadaAccepted as boolean,
          role: user.role as string,
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.userType = user.userType;
        token.verificationStatus = user.verificationStatus;
        token.subscriptionStatus = user.subscriptionStatus;
        token.shahadaAccepted = user.shahadaAccepted;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.userType = token.userType as string;
        session.user.verificationStatus = token.verificationStatus as string;
        session.user.subscriptionStatus = token.subscriptionStatus as string;
        session.user.shahadaAccepted = token.shahadaAccepted as boolean;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
