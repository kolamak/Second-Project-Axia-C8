import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SignUpFormData, signUpSchema } from '../validator'
// import { useState } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
   const {
          reset, 
          register, 
          handleSubmit, 
          formState: { errors }
      } = useForm<SignUpFormData>({
          resolver: zodResolver(signUpSchema),
      })

      const onSubmit = (data: SignUpFormData) => {
        console.log('Enter Authentication Code:', data)
        reset()
    }
    
    // set these functions
    // const [error, setError] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    
    // const [isLoading, setIsLoading] = useState()
    // let it display an icon(like an hour glass) rolling on screen

    // const [success, unSucces] = useState()
    // set function to display login successfully

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (!email || !password) {
    //         setError('Please fill in all fields')
    //         return
    //     }

    //     if (password.length < 8) {
    //         setError('password must be at least 8 characters long')
    //         return
    //     }

return (
    <>
     <div className="flex items-center justify-center bg-gray-300" >
     <div className="w-100 h-115 p-4 my-28.5 bg-white rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-lg text-[#3d3d55] font-bold mt-2 pb-4">Login to your account</h1>
         <div>
           Enter your email below to login to your account
         </div>
           <form 
           onSubmit={handleSubmit(onSubmit)}
           className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 mt-6 w-80">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-300 p-2 rounded-md w-full h-8 bg-gray-50"
                id="email"
                {...register("email")}
                type="email"
                placeholder="m@example.com"
                required
              />

               {errors.email && (
                        <span className='text-red-500 text-sm'>
                        {errors.email.message}
                        </span>
                    )}
            </div>
            <div className="grid gap-2 w-80">
              <div className="flex justify-between gap-8 ">
                <label htmlFor="password">Password</label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <input
                className="border border-gray-300 p-2 rounded-md w-full h-8 bg-gray-50"
                id="password"
                {...register("password")}
                type="password"
                required
              />

              {errors.password && (
                        <span className='text-red-500 text-sm'>
                        {errors.password.message}
                        </span>
                    )}
            </div>
          </div>

          <div className="grid">
           <button 
           className='text-white font-medium w-80 h-10 mt-6 text-sm 
                    rounded-md bg-[#3d3d55] hover:bg-gray-500
                    cursor-pointer'>Login
           </button>
           <button className='text-[#3d3d55] font-medium w-80 h-10 mt-4 text-sm 
                    rounded-md bg-white border border-[#3d3d55] hover:bg-gray-500 justify-center
                    cursor-pointer'>
             Login with Google
           </button>
         </div>
        </form>
         
      </div>
    </div>
    </>
)}
