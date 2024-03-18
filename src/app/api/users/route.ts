import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'

export async function POST(request: NextRequest) {
  const data = await request.json()
  const { name, email, password } = data
  console.log('ROUTE HANDLER', data)

  if (!name || !email || !password) {
    return NextResponse.json('Dados inválidos.', { status: 400 })
  }

  const isUserExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (isUserExists) {
    return NextResponse.json({ error: 'User já existe.' }, { status: 400 })
  }

  const hashedPassword = await hash(password, 14)

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json({ message: user }, { status: 201 })
}
