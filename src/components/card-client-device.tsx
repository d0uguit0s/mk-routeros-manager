import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
        <CardTitle>{clientName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
