import ShowData from '@/components/show-data'

interface Props {
  params: { device: string }
}

export default function Hotspot({ params }: Props) {
  return (<div className='w-full flex items-center flex-col'>
  <h1>Hotspot {params.device}</h1>
  <ShowData className='w-11/12'/>
  </div>)
}
