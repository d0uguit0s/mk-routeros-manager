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

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Insira seu nome!' }),
    email: z
      .string()
      .trim()
      .min(1, { message: 'Insira um email!' })
      .email({ message: 'Email inválido!' }),
    password: z
      .string()
      .trim()
      .min(1, { message: 'Crie uma senha!' })
      .min(8, { message: 'A senha tem que ter no mínimo 8 caracteres!' }),
    passwordConfirmation: z
      .string()
      .trim()
      .min(1, { message: 'Digite sua senha novamente!' })
      .min(8, { message: 'A senha tem que ter no mínimo 8 caracteres!' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas são diferentes!',
    path: ['passwordConfirmation'], // path of error
  })
