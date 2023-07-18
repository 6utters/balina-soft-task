import { FC } from 'react'
import { Film } from '@/entities/Film'
import { FilmRecommendations } from '../FilmRecommendations/FilmRecommendations'

interface FilmDetailsPageProps {
  film: Film
  recommendations: Film[]
}

export const FilmDetailsPage:FC<FilmDetailsPageProps> = (props) => {
  const { film, recommendations } = props

  const getFilms = async () => {
    const res = await fetch<Film[]>('http://localhost:8000/films?_start=2&_limit=6')
    return res.json()
  }

  return (
    <div>
      {film.title}
      <FilmRecommendations recommendedFilms={recommendations} />
    </div>
  )
}
