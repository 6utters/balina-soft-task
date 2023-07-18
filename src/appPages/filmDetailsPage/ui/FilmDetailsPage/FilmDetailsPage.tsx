import { FC, useMemo } from 'react'
import Image from 'next/image'
import { Film } from '@/entities/Film'
import { RatingsBlock } from '@/entities/Rating'
import { convertTime } from '@/shared/lib/convertTime/convertTime'
import { FilmRecommendations } from '../FilmRecommendations/FilmRecommendations'
import { FilmInfo } from '../FilmInfo/FilmInfo'
import { FilmDescription } from '../FilmDescription/FilmDescription'
import { FilmFeatures } from '../FilmFeatures/FilmFeatures'
import styles from './FilmDetailsPage.module.scss'

interface FilmDetailsPageProps {
  film: Film
  recommendations: Film[]
}

export const FilmDetailsPage: FC<FilmDetailsPageProps> = (props) => {
  const { film, recommendations } = props

  const ratings = useMemo(() => {
    return film.ratings.filter(rating => rating.source !== 'korona_ticket')
  }, [film.ratings])

  return (
    <section>
      <div className={styles.main_content}>
        <div className={styles.cover}>
          <Image src={film.cover} alt={'cover'} width={100} height={100} sizes={'100vh'} />
        </div>
        <h1 className={styles.title}>{film.title}</h1>
        <h4 className={styles.date}>{film.year}, {film.country}, {convertTime(film.duration)}, В прокате
          до {film.box_office_date}</h4>
        <FilmFeatures className={styles.features} film={film} />
        <button className={styles.buy_btn}><h4>Купить билет (от {film.price} руб.)
        </h4></button>
        <RatingsBlock className={styles.rating} ratings={ratings} />
        <FilmDescription className={styles.description} film={film} />
        <FilmInfo className={styles.info} film={film} />
      </div>
      <FilmRecommendations recommendedFilms={recommendations} />
    </section>
  )
}
