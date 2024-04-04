'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { IoEnterOutline } from 'react-icons/io5'
import { IconBaseProps, IconType } from 'react-icons/lib'
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
import { motion } from 'framer-motion'

import { Button } from './ui/button'

interface CardClientDeviceProps extends HTMLAttributes<HTMLDivElement> {
  clientName: string
  description: string
}

const Dot = forwardRef((props, ref) => <LuDot {...props} ref={ref} />)

const DotIcon = motion(Dot)

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
        {/* <motion.div
          className="h-96 w-96 bg-white"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
        ></motion.div>
        <LuDot size={30} color="orange" /> */}
        <DotIcon size={30} color="orange" animate={{ size: [30, 50, 30] }} />
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
