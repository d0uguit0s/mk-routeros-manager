import { HTMLAttributes, ReactNode } from 'react'

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
}

export default function TableRow({ children, ...props }: TableRowProps) {
  return <tr {...props}>{children}</tr>
}
