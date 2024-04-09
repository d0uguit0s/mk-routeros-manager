import { ReactNode, ThHTMLAttributes } from 'react'

interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
}

export default function TableHead({ children, ...props }: TableHeadProps) {
  return <th {...props}>{children}</th>
}
