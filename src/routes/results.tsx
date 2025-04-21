import FavoritesPage from '@/MyComponents/favorites-page'
import { createFileRoute } from '@tanstack/react-router'


function Results() {
  return<>
    <FavoritesPage/>
  </>
}

export const Route = createFileRoute('/results')({
  component: Results,
})
