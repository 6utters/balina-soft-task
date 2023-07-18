import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import { RecommendationList } from '@/features/recommendations'
import styles from './FilmRecommendations.module.scss'

interface FilmRecommendationsProps {
  films?: Film[]
}

export const FilmRecommendations: FC<FilmRecommendationsProps> = memo((props) => {
  const { films } = props
  return (
    <div className={styles.recommendations_wrapper}>
      <div className={styles.recommendations}>
        <div className={styles.title}><h2>Похожие по жанру</h2></div>
        <RecommendationList films={films} />
      </div>
    </div>
  )
})
