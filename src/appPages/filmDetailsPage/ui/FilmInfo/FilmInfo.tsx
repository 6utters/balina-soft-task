import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import cn from 'classnames'
import styles from './FilmInfo.module.scss'

interface FilmInfoProps {
  className?: string
  film: Film
}

export const FilmInfo: FC<FilmInfoProps> = memo((props) => {
  const { film, className } = props
  return (
    <div className={cn(styles.info, className)}>
      <ul className={styles.features}>
        <li>
          <h5>Премьера</h5>
          <h4>{film.opening_date}</h4>
        </li>
        <li>
          <h5>Возраст</h5>
          <h4>{film.age}+</h4>
        </li>
        <li>
          <h5>Страна</h5>
          <h4>{film.country}</h4>
        </li>
        <li>
          <h5>Режисер</h5>
          <h4>{film.director}</h4>
        </li>
      </ul>
      <div className={styles.actors}>
        <h5>В ролях</h5>
        <h4>{film.cast.join(', ')}</h4>
      </div>
    </div>
  )
})

FilmInfo.displayName = 'FilmInfo'
