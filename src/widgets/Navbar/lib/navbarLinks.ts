export interface NavbarLink {
  id: string
  title: string
  href: string
}


export const navbarLinks: NavbarLink[] = [
  { id: '1', title: 'Кино', href: '/' },
  { id: '2', title: 'События', href: '/events' },
  { id: '3', title: 'Спорт', href: '/sports' }
]
