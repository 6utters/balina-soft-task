import React, { FC, memo } from 'react'
import Image from 'next/image'
import Star from '@/shared/assets/icons/star.svg'
import WhiteStar from '@/shared/assets/icons/white_star.svg'
import cn from 'classnames'
import styles from './Rating.module.scss'

interface RatingProps {
  className?: string
  rate: number
  primary?: boolean
}

export const Rating: FC<RatingProps> = memo((props) => {
  const { className, rate, primary = true } = props
  return (
    <div className={cn(styles.rating, className)}>
      <Image src={primary ? Star : WhiteStar} alt='rating_star' />
      <h4>{rate}</h4>
    </div>
  )
})

Rating.displayName = 'Rating'

