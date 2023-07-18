import React, { FC } from 'react'
import { Film } from '@/entities/Film'
import Link from 'next/link'
import Image from 'next/image'
import styles from './FilmsPage.module.scss'

interface FilmsPageProps {
  films: Film[]
}

export const FilmsPage: FC<FilmsPageProps> = ({ films }) => {
  return (
    <ul className={styles.films}>
      {films.map(film =>
        <li key={film.id} className={styles.card}>
          <Link href={`/films/${film.id}`}>
            <Image src={film.cover} alt={'cover'} height={100} width={100} sizes={'100vh'} />
            <h3>{film.title}</h3>
          </Link>
        </li>
      )}
    </ul>
  )
}


