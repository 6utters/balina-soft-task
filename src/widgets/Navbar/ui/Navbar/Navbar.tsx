import { FC } from 'react'
import { NavbarLinks } from '../NavbarLinks/NavbarLinks'
import { AppLogo } from '@/shared/ui/appLogo/AppLogo'
import { SearchButton } from '@/widgets/Search'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <AppLogo />
        <NavbarLinks/>
        <SearchButton className={styles.search} />
      </nav>
    </div>
  )
}
