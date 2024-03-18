import { NextAuthOptions } from 'next-auth'
// eslint-disable-next-line import/no-named-as-default
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compare } from 'bcrypt'

import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email@mail.com' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'Name', type: 'text', placeholder: 'jsmith' },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials.password)
          throw new Error('Dados de login necessários')

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user || !user.hashedPassword)
          throw new Error('Credenciais do usuário não encontradas')

        const matchPassword = await compare(credentials.password, user.hashedPassword)
        if (!matchPassword) throw new Error('Email ou senha inválidos')

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
}
