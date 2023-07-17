import { FC, memo } from 'react'
import { Film } from '@/entities/Film'

interface FilmDetailsPageProps {
  film: Film
}

export const FilmDetailsPage: FC<FilmDetailsPageProps> = memo((props) => {
  const { film } = props
  return (
    <div>
      {film.title}
    </div>
  )
})
