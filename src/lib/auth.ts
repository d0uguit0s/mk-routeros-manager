import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email@mail.com' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'Name', type: 'text', placeholder: 'jsmith' },
      },
      async authorize(credentials, req): Promise<any> {
        const user = { email: 'doug@mail.com', password: '102030', name: 'Douglas' }

        return user
      },
    }),
  ],
}
