import FavoritesPage from '@/MyComponents/favorites-page'
import { createFileRoute } from '@tanstack/react-router'


function About() {
  return<>
    <FavoritesPage/>
  </>
}

export const Route = createFileRoute('/about')({
  component: About,
})
