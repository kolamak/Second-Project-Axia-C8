import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signUt')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/signUt"!</div>
}
