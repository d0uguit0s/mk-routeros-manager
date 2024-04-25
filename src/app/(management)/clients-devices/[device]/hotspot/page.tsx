'use client'

import { useEffect } from 'react'

import ShowData from '@/components/show-data'
import { axiosCustom } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface HotspotProps {
  params: { device: string }
}

interface Resource {
  'architecture-name': string
  'board-name': string
}

export default function Hotspot({ params }: HotspotProps) {
  // useEffect(() => {
  //   axios
  //     .get('http://914f0a29d42e.sn.mynetname.net/rest/system/resource')
  //     .then(function (response) {
  //       console.log('foi')
  //       console.log(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log('erro')
  //       console.error(error)
  //     })
  // }, [])
  // const { data, error } = useQuery<Resource>({
  //   queryKey: ['hotspot_user'],
  //   queryFn: async () => {
  //     const response = await axiosCustom.get('/system/resource')

  //     return response.data
  //   },
  // })

  return (
    <div className="flex w-full flex-col items-center">
      <h1>Hotspot {params.device}</h1>
      <ShowData className="w-11/12" />
    </div>
  )
}
