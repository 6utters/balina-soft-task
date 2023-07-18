import { FC, memo } from 'react'
import Star from '@/shared/assets/icons/star.svg'
import { Film } from '@/entities/Film'
import Image from 'next/image'
import cn from 'classnames'
import styles from './RecommendationListItem.module.scss'

interface RecommendationListItemProps {
  className?: string
  film: Film
}

export const RecommendationListItem: FC<RecommendationListItemProps> = memo((props) => {
  const { className, film } = props
  return (
    <li className={cn(styles.film_card, className)}>
      <div className={styles.image_container}>
        <Image src={film.cover} alt='film_cover' />
      </div>
      <div className={styles.main}>
        <div>
          <h3>{film.title}</h3>
          <h4>{film.genres.join(', ')}, до {film['box_office_date']} {film.year}, {film.country}</h4>
        </div>
        <div className={styles.additional}>
          <div className={styles.rating}>
            <Image src={Star} alt='rating_star' />
            <h4>{film.ratings[0].rating}</h4>
          </div>
          {film.isPremiere && <h4>Премьера</h4>}
          <h4>+{film.age}</h4>
        </div>
      </div>
    </li>
  )
})
