import { createFileRoute } from '@tanstack/react-router'
// import { useState } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
    
    // set these functions
    // const [error, setError] = useState()
    // throw new error when password is incorect, when a field is empty,
    // const [isLoading, setIsLoading] = useState()
    // let it display an icon(like an hour glass) rolling on screen


    // const [success, unSucces] = useState()
    // set function to display login successfully
return (
    <>
     <div className="flex items-center justify-center bg-gray-300" >
     <div className="w-100 h-100 p-5 my-32 bg-white rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-lg text-[#3d3d55] font-bold">Login to your account</h1>
         <div>
           Enter your email below to login to your account
         </div>
           <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 mt-6 w-80">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-300 p-2 rounded-md w-full h-8 bg-gray-50"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
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
                type="password"
                required
              />
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
