import { FC, memo } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Search from '@/shared/assets/icons/search.svg'
import styles from './SearchButton.module.scss'

interface SearchButtonProps {
    className?: string
}

export const SearchButton: FC = memo<SearchButtonProps>((props) => {
    const { className } = props
    return (
      <button className={cn(styles.search, className)}>
          <Image src={Search} alt="search_icon"/>
      </button>
    )
})
