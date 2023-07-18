import { FC, memo } from 'react'
import Image from 'next/image'
import { Film } from '@/entities/Film'
import ReadMore from '@/shared/ui/readMore/ReadMore'
import cn from 'classnames'
import styles from './FilmDescription.module.scss'

interface FilmDescription {
  className?: string
  film: Film
}

export const FilmDescription: FC<FilmDescription> = memo((props) => {
  const { film, className } = props
  return (
    <div className={cn(styles.description, className)}>
      <h2>Фрагменты и описание</h2>
      <div className={styles.images}>
        {film.images.map((image, i) =>
          <Image key={i} src={image} alt={'film_image'} height={100} width={100} sizes={'100vw'} />
        )}
      </div>
      <ReadMore maxChars={200}>
        Наёмник под кодовым именем Божья Коровка отправляется на новую миссию:
        вместо заболевшего коллеги он должен сесть в скоростной поезд Токио —
        Киото, выкрасть чемоданчик и сойти на промежуточной станции.
        Но выполнение простого задания сильно осложняется, когда выясняется,
        что состав просто кишит всевозможными киллерами.
      </ReadMore>
    </div>
  )
})

FilmDescription.displayName = 'FilmDescription'
