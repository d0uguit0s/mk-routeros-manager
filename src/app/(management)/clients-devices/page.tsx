import CardClientDevice from '@/components/card-client-device'
import { DialogCustom } from '@/components/dialog-custom'
import { getCurrentUser } from '@/lib/session'

export default async function ClientsDevices() {
  const session = await getCurrentUser()
  console.log(`Session: ${session}`)
  return (
    <div className="my-3 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-4">
      <DialogCustom className="fixed bottom-5 right-10 m-3" />
      <CardClientDevice
        className="w-11/12 bg-card sm:w-5/12 lg:w-1/3"
        clientName="Colégio Polis"
        description="CRS326-24G-2S+ - v6.47.10"
      />
      <pre className="w-1/2">{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
