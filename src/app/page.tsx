import { FilmsPage } from '@/appPages/FilmsPage'
import { Film } from '@/entities/Film'
import { SERVER_URL } from '@/shared/consts'

async function getFilms(): Promise<Film[]> {
  const res = await fetch(`${SERVER_URL}films`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const films = await getFilms()

  return (
    <FilmsPage films={films} />
  )
}
