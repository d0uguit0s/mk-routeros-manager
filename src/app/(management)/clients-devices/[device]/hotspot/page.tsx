import ShowData from '@/components/show-data'

interface Props {
  params: { device: string }
}

export default function Hotspot({ params }: Props) {
  return (
    <div className="flex w-full flex-col items-center">
      <h1>Hotspot {params.device}</h1>
      <ShowData className="w-11/12" />
    </div>
  )
}
