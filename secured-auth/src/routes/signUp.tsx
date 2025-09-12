import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { type SignUpFormData, signUpSchema } from '../validator'


export const Route = createFileRoute('/signup')({
  component: SignUp,
})

function SignUp() {
    const {
        reset, 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    })

    const onSubmit = (data: SignUpFormData) => {
        console.log('Form sunmitted successfully:', data)
        reset()
    }
return (
    <section className="flex items-center justify-center bg-gray-300">
        <div className="w-120 h-145 p-3 m-10 bg-white rounded-lg shadow-md flex flex-col items-center">
            <h1 className='text-5xl font-bold text-center text-[#3d3d55] m-4 p-3'>Sign Up</h1>

            <form className='flex flex-col w-full mt-4' onSubmit={handleSubmit(onSubmit)} >
                <div className='flex flex-col g-2 grid mb-4'>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    {...register("username")}
                    name="username" 
                    placeholder='Enter your username' 
                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
                    />

                    {errors.username && (
                        <span className='text-red-500 text-sm'>
                        {errors.username.message}
                        </span>
                    )}
                </div>

                <div className='flex flex-col g-2 grid mb-4'>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    {...register("email")}
                    name="email"
                    placeholder='Enter your email'
                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
                    />

                    {errors.email && (
                        <span className='text-red-500 text-sm'>
                        {errors.email.message}
                        </span>
                    )}
                </div>

                <div className='grid mb-4'>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    {...register("password")}
                    name="password" 
                    placeholder='Enter your password'
                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
                    />

                    
                    {errors.password && (
                        <span className='text-red-500 text-sm'>
                        {errors.password.message}
                        </span>
                    )}
                </div>

                <div className='grid mb-1'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    type="password" 
                    {...register("password")}
                    name="confirmPassword" 
                    placeholder='Confirm your password'
                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
                    />

                    
                    {errors.password && (
                        <span className='text-red-500 text-sm'>
                        {errors.password.message}
                        </span>
                    )}
                </div>

                <div className='cursor-pointer'>
                <p className='text-sm text-[#3d3d55]-700 font-medium m-0'><a href='#'>Forgot password?</a></p>
                </div>

                <button 
                type='submit'
                className='text-white text-sm font-medium w-full h-10 mt-4 text-sm 
                        rounded-md bg-[#3d3d55] hover:bg-gray-500
                        cursor-pointer'>Sign up</button>
            </form>
        </div>
    </section>
  )
}