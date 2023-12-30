import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Campo email obrigatório.',
        invalid_type_error: 'Formato válido deve ser string.'
    }).email({
        message: 'Email inválido.'
    }),
    password: z.string({
        required_error: 'Campo password obrigatório.',
        invalid_type_error: 'Formato válido deve ser string.'
    }).min(4, {
        message: 'Senha deve ter mínimo 4 caracteres.'
    })
});