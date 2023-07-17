import { FilmDetailsPage } from '@/pages/filmDetailsPage'
import { SERVER_URL } from '@/shared/consts'
import { Film } from '@/entities/Film'

async function getData(id: string): Promise<Film> {
  const res = await fetch(`${SERVER_URL}films/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function FilmDetails({ params }) {
  const data = await getData(params.id)

  return (
    <FilmDetailsPage film={data} />
  )
}
