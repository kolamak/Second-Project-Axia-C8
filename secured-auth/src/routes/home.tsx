import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='text-center justify-between font-bold p-65'>
    <h1 className='text-5xl'>Welcome!</h1>
    <p>This is the main content area for the home page.</p>
    <button 
           className='text-white font-medium w-30 h-8 mt-6 text-sm 
                    rounded-md bg-[#3d3d55] hover:bg-gray-500
                    cursor-pointer'>Signout
           </button>
  </div>
}

// This page will be the home page after login and sign up
