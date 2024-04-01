interface Props {
  params: { device: string }
}

export default function Dashboard({ params }: Props) {
  return <h1>Dashboard {params.device}</h1>
}
