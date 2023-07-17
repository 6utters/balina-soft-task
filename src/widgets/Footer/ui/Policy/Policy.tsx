import { FC, memo } from 'react'
import { policyCards } from '../../lib/policyCards'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Policy.module.scss'

export const Policy: FC = memo(() => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.cards}>
        {policyCards.map(card =>
          <li className={styles.card} key={card.id}>
            <Link href={card.href}><Image src={card.src} alt={card.alt} /></Link>
          </li>
        )}
      </ul>
      <ul className={styles.links}>
        <li><Link href={'/policy'}><h6>Политика конфиденциальности</h6></Link></li>
        <li><Link href={'/contract'}><h6>Договор публичной оферты</h6></Link></li>
      </ul>
      <h6 className={styles.address}>© 2023 ООО «Кино-инвест», г. Минск, ул. Матроскина, 23 УНП 101333338 тел: 8 017
        217-11-77</h6>
    </div>
  )
})
