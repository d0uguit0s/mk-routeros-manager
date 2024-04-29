import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Button } from '@/components/ui/button'

interface SimpleButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  element: string | ReactNode
}

function SimpleButtonCustom({ element, className, ...props }: SimpleButtonCustomProps) {
  return (
    <Button className={`w-full py-5 text-xl sm:py-6 lg:w-2/5 ${className}`} {...props}>
      {element}
    </Button>
  )
}

function CircularButtonCustom({ element, className, ...props }: SimpleButtonCustomProps) {
  return (
    <Button className={`h-16 w-16 rounded-full p-0 ${className}`} {...props}>
      {element}
    </Button>
  )
}

export { SimpleButtonCustom, CircularButtonCustom }
