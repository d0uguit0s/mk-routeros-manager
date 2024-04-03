import { NextAuthOptions } from 'next-auth'
// eslint-disable-next-line import/no-named-as-default
import CredentialsProvider from 'next-auth/providers/credentials'
// import GitHubProvider from 'next-auth/providers/github'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compare } from 'bcrypt'

import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
        name: { label: 'Name', type: 'text' },
      },
      async authorize(credentials) {
        // Verifica se foram enviados email e senha, caso não, lança erro pedindo os dados
        if (!credentials?.email || !credentials.password)
          throw new Error('Dados de login necessários')

        // Busca no banco email correspondente e coloca na const user
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        // Se user não existir ou não tiver
        // um hashPassword (em caso de login com google ou github)
        // Lança um erro de credenciais não encontradas
        if (!user || !user.hashedPassword)
          throw new Error('Credenciais do usuário não encontradas')

        // Após reunir todos os dados, é feito a comparação do hash guardado
        // com o hash atual enviado pelo form de login
        const matchPassword = await compare(credentials.password, user.hashedPassword)
        // Se senha for inválida retorna erro de senha inválida
        if (!matchPassword) throw new Error('Email ou senha inválidos')

        // Dando tudo certo retorna usuário para login
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
