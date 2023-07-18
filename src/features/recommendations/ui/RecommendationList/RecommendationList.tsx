import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import { RecommendationListItem } from '../RecommendationListItem/RecommendationListItem'
import styles from './RecommendationList.module.scss'
import cn from "classnames";

interface RecommendationListProps {
  films?: Film[]
  className?: string
}

export const RecommendationList = memo<RecommendationListProps>((props ) => {
  const { films, className } = props

  if (!films || films.length === 0) {
    return null
  }

  return (
    <ul className={cn(styles.recommendation_list, className)}>
      {films.map(film =>
        <RecommendationListItem film={film} key={film.id} className={styles.item}/>
      )}
    </ul>
  )
})
