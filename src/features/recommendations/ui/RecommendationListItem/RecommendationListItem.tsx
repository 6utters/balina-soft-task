import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import { Rating } from '@/shared/ui/rating/Rating'
import styles from './RecommendationListItem.module.scss'
import { RecommendationList } from '@/features/recommendations'

interface RecommendationListItemProps {
  className?: string
  film: Film
}

export const RecommendationListItem: FC<RecommendationListItemProps> = memo((props) => {
  const { className, film } = props
  return (
    <li className={cn(styles.film_card, className)}>
      <Link href={`/films/${film.id}`}>
        <div className={styles.image_container}>
          <Image src={film.cover} alt='film_cover' width={100} height={100} sizes={'100vw'} />
        </div>
        <div className={styles.main}>
          <div>
            <h3>{film.title}</h3>
            <h4>{film.genres.join(', ')}, до {film['box_office_date']} {film.year}, {film.country}</h4>
          </div>
          <div className={styles.additional}>
            <Rating rate={film.ratings[0].rating} />
            {film.isPremiere && <h4>Премьера</h4>}
            <h4>+{film.age}</h4>
          </div>
        </div>
      </Link>
    </li>
  )
})

RecommendationListItem.displayName = 'RecommendationListItem'
