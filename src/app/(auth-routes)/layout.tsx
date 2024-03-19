import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { getCurrentUser } from '@/lib/session'

interface AuthLayoutProps {
  children: ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getCurrentUser()
  if (session) {
    redirect('/dashboard')
  }

  return <>{children}</>
}
