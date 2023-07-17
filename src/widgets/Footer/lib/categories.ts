import { NavbarLink } from '@/widgets/Navbar'

interface FooterCategory {
  id: string
  title: string
  href: string
  links: NavbarLink[]
}

export const categories: FooterCategory[] = [
  {
    id: '1',
    title: 'Кино',
    href: '/',
    links: [
      {
        id: '1',
        title: 'Кинотеатр «Октябрь»',
        href: '/'
      },
      {
        id: '2',
        title: 'Кинотеатр «Ноябрь»',
        href: '/'
      }
    ]
  },
  {
    id: '2',
    title: 'Мероприятия',
    href: '/events',
    links: [
      {
        id: '1',
        title: 'Концерты',
        href: '/'
      },
      {
        id: '2',
        title: 'Бои',
        href: '/'
      },
      {
        id: '3',
        title: 'Семинары',
        href: '/'
      },
      {
        id: '4',
        title: 'Прочее',
        href: '/'
      }
    ]
  },
  {
    id: '3',
    title: 'Спорт',
    href: '/sports',
    links: [
      {
        id: '1',
        title: 'Разовое посещение',
        href: '/'
      },
      {
        id: '2',
        title: 'Купить абонемент\n',
        href: '/'
      }
    ]
  }
]
