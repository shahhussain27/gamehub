import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";
import { connectToDB } from "../../../../lib/mongodb/mongoose";
import User from "../../../../lib/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDB();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (user && (await compare(credentials.password, user.password))) {
          return { email: user.email, name: user.name };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return Promise.resolve("/");
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
