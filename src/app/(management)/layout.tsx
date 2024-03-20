import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { getCurrentUser } from '@/lib/session'

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getCurrentUser()
  if (!session) {
    redirect('/login')
  }

  return (
    <>
      <ThemeToggleButton />
      {children}
    </>
  )
}
