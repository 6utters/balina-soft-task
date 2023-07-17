import { FC, ReactNode } from 'react'
import { Navbar } from '@/widgets/Navbar'
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC = (props => {
  const { children } = props
  return (
    <div className={styles.main_layout}>
      <Navbar />
      {children}
    </div>
  )
})
