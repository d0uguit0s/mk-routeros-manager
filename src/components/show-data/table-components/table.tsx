import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'

import TableHead from './table-head'
import TableRow from './table-row'

export default function Table() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <TableRow>
            <TableHead className="border border-slate-600">
              <Checkbox />
            </TableHead>
            <TableHead className="border border-slate-600">Nome</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Login</TableHead>
            <TableHead className="border border-slate-600">Grupo</TableHead>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td className="border border-slate-600">
              <Checkbox />
            </td>
            <td className="border border-slate-600">Douglas</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">dg@mail.com</td>
            <td className="border border-slate-600">TI</td>
          </TableRow>
        </tbody>
      </table>
    </ScrollArea>
  )
}
