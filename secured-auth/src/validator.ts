import * as z from 'zod';


export const signUpSchema = z.object({
username: z
    .string()
    .min(3, {
        message: 'Username must be at least 3 characters long',
    })
    .nonempty({
        message: 'Username is required',
    }),
email: z
    .string()
    .email({
        message: 'Please enter a valid email address'
    })
    // dont forget to pass a regex to ensure this is an email
    .nonempty({
         message: 'Email is required'   
    }),
password: z
    .string()
    .min(8, {
        message: 'Password must be at least 8 characters long',
    })
    .nonempty({
        message: 'Password is required',
    }),  
confirmPassword: 
    z.string()
    .min(8, {
        message: 'Password must be at least 8 characters long',
    })
    .nonempty({
        message: 'Confirm password',
    }),
})

export type signUpData = z.infer<typeof signUpSchema>;
