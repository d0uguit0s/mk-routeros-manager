import { NextResponse } from 'next/server'

import { axiosCustom } from '@/lib/axios'

export async function GET() {
  try {
    const response = await axiosCustom.get('/system/resource')
    console.log('foi')
    return NextResponse.json(response.data, { status: 201 })
  } catch (error) {
    console.log('erro')
    return NextResponse.json(error, { status: 401 })
  }
}
