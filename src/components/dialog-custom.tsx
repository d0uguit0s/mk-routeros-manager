import { HTMLAttributes } from 'react'
import { LuPlus } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface DialogCustomProps extends HTMLAttributes<HTMLDivElement> {
  // Aqui você pode adicionar mais propriedades se necessário
}

export function DialogCustom({ className }: DialogCustomProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <Button variant="outline" className="h-16 w-16 rounded-full p-0">
          <LuPlus size={30} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo roteador Mikrotik</DialogTitle>
          <DialogDescription>
            Insira as informações do seu roteador Mikrotik aqui
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" placeholder="Exemplo Nome" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ip_address" className="text-right">
              IP
            </Label>
            <Input id="ip_address" placeholder="0.0.0.0" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ddns_address" className="text-right">
              DDNS
            </Label>
            <Input
              id="ddns_address"
              placeholder="meuddns.sn.mynetname.net"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
