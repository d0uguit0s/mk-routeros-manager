'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface propsProviderForm {
  closeDialog: () => void
  isLoading: boolean
  setWasSent: (arg0: boolean) => void
  setIsLoading: (arg0: boolean) => void
}

const formSchema = z.object({
  nameOfProvider: z.string(),
  responsible: z.string(),
  email: z.string().email(),
  phone: z.string(),
  website: z.string(),
  regions: z.string(),
})

export default function MikrotikForm({
  closeDialog,
  isLoading,
  setWasSent,
  setIsLoading,
}: propsProviderForm) {
  return (
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
  )
}
