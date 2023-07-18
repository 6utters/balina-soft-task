'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Arrow from '@/shared/assets/icons/arrow.svg'
import cn from 'classnames'
import styles from './ReadMore.module.scss'

interface ReadMoreProps {
  children: string,
  maxChars: number
}

const ReadMore: FC<ReadMoreProps> = (props) => {
  const { children, maxChars = 150 } = props
  const [toggled, setToggled] = useState(true)

  const text = children

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