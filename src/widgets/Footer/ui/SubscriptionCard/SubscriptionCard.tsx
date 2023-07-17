'use client'

import { FC, memo, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Cross from '@/shared/assets/icons/cross.svg'
import styles from './SubscriptionCard.module.scss'

interface SubscriptionCardProps {
  className?: string
}

export const SubscriptionCard: FC<SubscriptionCardProps> = memo((props) => {
  const { className, onClose } = props
  const [isVisible, setIsVisible] = useState(true)

  const close = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className={cn(styles.subscription_card_wrapper, className)}>
      <div className={styles.mobile_close}>
        <h2>Подписаться</h2>
        <button className={styles.close_btn} onClick={close}>
          <Image src={Cross} alt='cross_icon' />
        </button>
      </div>
      <div className={styles.subscription}>
        <h4>Подпишись, оставь телефон или e-mail для получения рекламных сообщений.</h4>
        <button>Подписаться</button>
      </div>
    </div>
  )
})
