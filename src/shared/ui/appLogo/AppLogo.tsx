import { FC, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Crown from '@/shared/assets/icons/crown.svg'
import styles from './AppLogo.module.scss'
import cn from 'classnames'

interface AppLogoProps {
  className?: string
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const { className } = props
  return (
    <Link href='/' className={cn(styles.crown, className)}>
      <Image
        src={Crown}
        alt='crown-icon'
      />
    </Link>
  )
})

AppLogo.displayName = 'AppLogo'
