import { Metadata } from 'next'
import Link from 'next/link'

import AuthButton from '@/components/auth-button'
import { UserRegisterForm } from '@/components/forms/auth/user-register-form'

export const metadata: Metadata = {
  title: 'Registro',
  description: 'Página de registro',
}

export default function AuthenticationPage() {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <AuthButton page="register" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-1/5 flex-col justify-center space-y-6 rounded-md bg-primary-foreground px-6 py-10">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Cria conta</h1>
            <p className="text-sm text-muted-foreground">Entre com seus dados</p>
          </div>
          <UserRegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em continuar, você concorda com nossos{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviços
            </Link>{' '}
            e{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Politicas de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
