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

import { Button } from './ui/button'

interface CardClientDeviceProps {
  clientName: string
  description: string
}

export default function CardClientDevice({
  clientName,
  description,
}: CardClientDeviceProps) {
  return (
    <Card className="w-11/12 sm:w-5/12 lg:w-1/3">
      <CardHeader>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <CardTitle>{clientName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <LuDot /> 1ms
        </p>
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
