import { useRouter } from 'next/router'

export default function Device() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}
