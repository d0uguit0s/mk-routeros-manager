interface Props {
  params: { device: string }
}

export default function Hotspot({ params }: Props) {
  return <h1>Hotspot {params.device}</h1>
}
