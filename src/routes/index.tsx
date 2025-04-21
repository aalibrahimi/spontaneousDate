import HomePage from '@/MyComponents/home-page'
import { createFileRoute } from '@tanstack/react-router'

function Index() {
  return (
    <>
    <HomePage/>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
