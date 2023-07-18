import { FilmDetailsPage } from '@/appPages/filmDetailsPage'
import { SERVER_URL } from '@/shared/consts'
import { Film } from '@/entities/Film'

async function getFilm(id: string): Promise<Film> {
  const res = await fetch(`${SERVER_URL}films/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getFilmRecommendations(): Promise<Film[]> {
  const res = await fetch(`${SERVER_URL}films?_start=2&_limit=6`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function FilmDetails({ params }: { params: { id: string } }) {
  const film = await getFilm(params.id)
  const recommendations = await getFilmRecommendations()

  return (
    <FilmDetailsPage film={film} recommendations={recommendations} />
  )
}
