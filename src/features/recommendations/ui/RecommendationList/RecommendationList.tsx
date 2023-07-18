import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import { RecommendationListItem } from '../RecommendationListItem/RecommendationListItem'
import styles from './RecommendationList.module.scss'

interface RecommendationListProps {
  films?: Film[]
}

export const RecommendationList: FC<RecommendationListProps> = memo((props) => {
  const { films } = props

  return (
    <ul className={styles.recommendation_list}>
      {films.map(film =>
        <RecommendationListItem film={film} key={film.id} />
      )}
    </ul>
  )
})
