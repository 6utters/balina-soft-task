import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import cn from 'classnames'
import { Rating } from '@/shared/ui/rating/Rating'
import styles from './FilmFeatures.module.scss'

interface FilmFeaturesProps {
  film: Film
  className?: string
}

export const FilmFeatures: FC<FilmFeaturesProps> = memo((props) => {
  const { className, film } = props
  return (
    <div className={cn(styles.features, className)}>
      <Rating className={styles.block} rate={film.ratings[0].rating} />
      {film.isPremiere && <div className={styles.block}><h5>Премьера</h5></div>}
      {film.genres.map(genre =>
        <div key={genre} className={styles.block}><h5>{genre}</h5></div>
      )}
      <div className={styles.block}>{film.age}+</div>
    </div>
  )
})

FilmFeatures.displayName = 'FilmFeatures'
