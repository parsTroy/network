import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must be a minimum of Two characters.' }),
    username: z.string().min(2, { message: 'Username must be a minimum of Two characters.' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters.' }),
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters.' }),
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(250),
    tags: z.string(),
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
});