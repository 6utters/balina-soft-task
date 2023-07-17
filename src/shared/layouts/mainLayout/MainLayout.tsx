import { FC, ReactNode } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { Footer } from '@/widgets/Footer'
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props => {
  const { children } = props
  return (
    <div className={styles.main_layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
})
