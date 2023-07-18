'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Arrow from '@/shared/assets/icons/arrow.svg'
import styles from './ReadMore.module.scss'
import cn from 'classnames'

interface ReadMoreProps {
  children: Text,
  maxChars: number
}

const ReadMore: FC<ReadMoreProps> = (props) => {
  const { children, maxChars = 150 } = props
  const [toggled, setToggled] = useState(true)

  const text = children as string

  const result = toggled ? `${text.slice(0, maxChars)}...` : text

  const toggle = () => setToggled(prev => !prev)

  return (
    <div className={styles.read_more}>
      <p>{result}</p>
      <button className={cn(styles.unfold_btn, { [styles.unfolded]: !toggled })} onClick={toggle}>
        <h4>{toggled ? 'Развернуть' : 'Свернуть'}</h4>
        <Image src={Arrow} alt={'arrow'} />
      </button>
    </div>
  )
}

export default ReadMore