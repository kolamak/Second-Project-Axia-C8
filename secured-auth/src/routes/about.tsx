import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div className='text-center justify-between text-5xl font-bold p-75'>Hello from About!</div>
}