import { FC, memo } from 'react'
import Link from 'next/link'
import { categories } from '../../lib/categories'
import { Policy } from '../Policy/Policy'
import { SubscriptionCard } from '../SubscriptionCard/SubscriptionCard'
import { AppLogo } from '@/shared/ui/appLogo/AppLogo'
import styles from './Footer.module.scss'

export const Footer: FC = memo((props) => {
  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <div className={styles.menu}>
          <AppLogo className={styles.logo} />
          <ul className={styles.links}>
            {categories.map(category =>
              <li key={category.id}>
                <div className={styles.category}>
                  <Link href={category.href}>
                    <h3>{category.title}</h3>
                  </Link>
                  <ul className={styles.sub_links}>
                    {category.links.map(link =>
                      <li key={link.id}>
                        <Link href={link.href}>
                          <h5>{link.title}</h5>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            )}
          </ul>
          <SubscriptionCard className={styles.subscription} />
        </div>
        <Policy />
      </footer>
    </div>
  )
})
