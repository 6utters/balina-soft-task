import { FC, memo } from 'react'
import { Film } from '@/entities/Film'
import { RecommendationList } from '@/features/recommendations'
import styles from './FilmRecommendations.module.scss'

interface FilmRecommendationsProps {
  recommendedFilms?: Film[]
}

export const FilmRecommendations: FC<FilmRecommendationsProps> = memo((props) => {
  const { recommendedFilms } = props

  if (!recommendedFilms || recommendedFilms.length == 0) {
    return null
  }

  return (
    <div className={styles.recommendations}>
      <div className={styles.title}><h2>Похожие по жанру</h2></div>
      <RecommendationList className={styles.recommendations_list} films={recommendedFilms} />
    </div>
  )
})

FilmRecommendations.displayName = 'FilmRecommendations'
