import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Insira seu email!' })
    .email({ message: 'Email inválido!' }),
  password: z
    .string()
    .trim()
    .min(1, { message: 'Insira sua senha!' })
    .min(8, { message: 'A senha tem que ter no mínimo 8 caracteres!' }),
})
