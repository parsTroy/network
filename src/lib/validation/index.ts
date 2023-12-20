import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must be a minimum of Two characters.' }),
    username: z.string().min(2, { message: 'Username must be a minimum of Two characters.' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters.' }),
})