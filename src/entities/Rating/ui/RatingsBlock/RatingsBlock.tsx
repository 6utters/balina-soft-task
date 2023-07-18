import { FC } from 'react'
import { Rating as RatingType } from '../../types/rating'
import { Rating } from '@/shared/ui/rating/Rating'
import styles from './RatingsBlock.module.scss'
import cn from 'classnames'

interface RatingsBlockProps {
  ratings: RatingType[]
  className?: string
}

export const RatingsBlock: FC<RatingsBlockProps> = (props) => {
  const { ratings, className } = props
  return (
    <div className={cn(styles.ratings_block, className)}>
      {ratings.map(rating =>
        <div className={styles.block} key={rating.source}>
          <div className={styles.info}>
            <h6>{rating.source}</h6>
            <h6 className={styles.reviews}>{rating.reviews} отзывов</h6>
          </div>
          <Rating className={styles.rating} rate={rating.rating} primary={false} />
        </div>
      )}
    </div>
  )
}

