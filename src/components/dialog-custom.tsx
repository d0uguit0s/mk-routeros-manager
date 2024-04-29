'use client'

import { HTMLAttributes, useState } from 'react'
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
import { CircularButtonCustom } from './buttons-custom'

interface DialogCustomProps extends HTMLAttributes<HTMLDivElement> {
  // Aqui você pode adicionar mais propriedades se necessário
}

export function DialogCustom({ className }: DialogCustomProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleClose() {
    setOpen(false)
  }

  function handleOpen() {
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={className}>
        <CircularButtonCustom element={<LuPlus size={30} />} onClick={handleOpen} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo roteador Mikrotik</DialogTitle>
          <DialogDescription>
            Insira as informações do seu roteador Mikrotik aqui
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
