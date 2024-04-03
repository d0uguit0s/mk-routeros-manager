import { HTMLAttributes } from 'react'
import { IoEnterOutline } from 'react-icons/io5'
import { LuDot } from 'react-icons/lu'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { motion } from 'framer-motion'

import { Button } from './ui/button'

interface CardClientDeviceProps extends HTMLAttributes<HTMLDivElement> {
  clientName: string
  description: string
}

export default function CardClientDevice({
  className,
  clientName,
  description,
}: CardClientDeviceProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <CardTitle>{clientName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center">
        {/* <motion.div> */}
        <LuDot size={30} color="orange" />
        {/* </motion.div> */}
        1ms
      </CardContent>
      <CardFooter>
        <Button>
          Acessar
          <IoEnterOutline />
        </Button>
      </CardFooter>
    </Card>
  )
}
