import { FC, memo, useEffect, useState } from 'react'
import { Film } from '@/entities/Film'
import { FilmRecommendations } from '../FilmRecommendations/FilmRecommendations'

interface FilmDetailsPageProps {
  film: Film
}

export const FilmDetailsPage: FC<FilmDetailsPageProps> = memo((props) => {
  const { film } = props
  const [recommendedFilms, setRecommendedFilms] = useState<Film[]>([])

  const getFilms = async () => {
    const res = await fetch<Film[]>('http://localhost:8000/films?_start=2&_limit=6')
    return res.json()
  }

  useEffect(async () => {
    const films = await getFilms()
    setRecommendedFilms(films)
  }, [])

  return (
    <div>
      {film.title}
      <FilmRecommendations films={} />
    </div>
  )
})
