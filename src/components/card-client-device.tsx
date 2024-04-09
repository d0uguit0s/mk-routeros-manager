'use client'

import { HTMLAttributes } from 'react'
import { IconContext } from 'react-icons'
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
import { motion } from 'framer-motion'

import { Button } from './ui/button'

interface CardClientDeviceProps extends HTMLAttributes<HTMLDivElement> {
  clientName: string
  description: string
}

const MyAnimatedIcon = () => {
  return (
    <IconContext.Provider value={{ size: '2em', color: '#00ff00' }}>
      <motion.div
        animate={{ opacity: [1, 0], scale: [1, 4] }}
        transition={{ repeat: Infinity, duration: 3, repeatDelay: 0.1 }}
      >
        <LuDot />
      </motion.div>
    </IconContext.Provider>
  )
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
        {/* <motion.div
          className="h-96 w-96 bg-white"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
        ></motion.div>
        <LuDot size={30} color="orange" /> */}
        <MyAnimatedIcon />
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
