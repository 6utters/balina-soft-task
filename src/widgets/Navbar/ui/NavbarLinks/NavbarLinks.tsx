'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {navbarLinks} from '../../lib/navbarLinks'
import cn from 'classnames'
import styles from './NavbarLinks.module.scss'

interface NavbarLinksProps {
  className?: string
}

export const NavbarLinks: FC<NavbarLinksProps> = (props) => {
  const {className} = props
  const pathname = usePathname()

  console.log('pathname:', pathname)

  return (
    <ul className={styles.links}>
      {navbarLinks.map((link) =>
        <li className={cn(styles.link, className, { [styles.active]: link.href === pathname })} key={link.id}>
          <Link href={link.href}>
            <h4>{link.title}</h4>
          </Link>
        </li>
      )}
    </ul>
  )
}
