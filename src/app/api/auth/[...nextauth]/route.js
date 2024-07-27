import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import GitHubProvider from 'next-auth/providers/github'

const adminEmails = ['kanishkchaudhary2005@gmail.com','kuldeep2231qk@gmail.com','devp1866@gmail.com','jemspatel1080@gmail.com',''];

export const authOpt = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    session: ({session, token, user}) => {
      if(adminEmails.includes(session?.user?.email)){
        return session;
      }
      return false;
    },
  },
}

const nextAuth = NextAuth(authOpt)

export {nextAuth as GET, nextAuth as POST}

export async function isAdminRequest(){
  const session = await getServerSession(authOpt);
  if(!adminEmails.includes(session?.user?.email)){
    throw 'You Are Not Admin'
  }
}