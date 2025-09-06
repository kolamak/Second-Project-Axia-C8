import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <nav className='sticky top-0 z-50'>
      <div className='w-full h-16 bg-[#3d3d55] text-white items-center p-4 flex justify-between'>
        <h1 className='text-lg font-bold'>KOLAMAK</h1>
        <div>
          <ul className='flex gap-x-8 font-medium'>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        {/* <Link to="/about">Project</Link>{' '}
        <Link to="/about">Contacts</Link>{' '} */}
          </ul>
        </div>
        <div className='flex gap-4'>
        <Link to="/signUt"><button className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 border border-white-600 cursor-pointer'>
          Sign up here!
        </button></Link> {' '}
        <Link to="/login"><button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 font-bold border border-[#3d3d55]-600 cursor-pointer'>
          Login
        </button></Link>{' '}
        </div>
      </div>
    </nav>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })