const Nav = () => {
  return (
    <nav className='sticky top-0 z-50'>
      <div className='w-full h-16 bg-[#3d3d55] text-white items-center p-4 flex justify-between'>
        <h1 className='text-lg font-bold'>KOLAMAK</h1>
        <div>
          <ul className='flex gap-x-8 font-medium'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <button className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 border border-white-600 cursor-pointer'>
          Sign up here!
        </button>
        <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 font-bold border border-[#3d3d55]-600 cursor-pointer'>
          Login
        </button>
        </div>
        
      </div>
    </nav>
  )
}

export default Nav