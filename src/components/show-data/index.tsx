import { HTMLAttributes } from 'react'

import { TableView } from './table-view'

interface ShowDataProps extends HTMLAttributes<HTMLDivElement> {}

export default function ShowData({ ...props }: ShowDataProps) {
  return (
    <div {...props}>
      <TableView />
    </div>
  )
}
