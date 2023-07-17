import belcart from '@/shared/assets/images/cards/belcart_logo.png'
import belcartParol from '@/shared/assets/images/cards/belcart_parol_logo.png'
import mastercard from '@/shared/assets/images/cards/mastercard_logo.png'
import mastercard_secure from '@/shared/assets/images/cards/mastercard_logo_secure_code_logo.png'
import visa from '@/shared/assets/images/cards/visa_logo.png'
import webpay from '@/shared/assets/images/cards/webpay_logo.png'

interface PolicyCard {
  id: string
  href: string
  src: string
  alt: string
}

export const policyCards: PolicyCard[] = [
  {
    id: '1',
    href: '/',
    src: belcart,
    alt: 'belcart_parol_card'
  },
  {
    id: '2',
    href: '/',
    src: belcartParol,
    alt: 'belcart_card'
  },
  {
    id: '3',
    href: '/',
    src: mastercard,
    alt: 'mastercard_card'
  },
  {
    id: '4',
    href: '/',
    src: mastercard_secure,
    alt: 'mastercard_secure_card'
  },
  {
    id: '5',
    href: '/',
    src: visa,
    alt: 'visa_card'
  },
  {
    id: '6',
    href: '/',
    src: webpay,
    alt: 'webpay_card'
  }
]
