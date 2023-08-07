import Image from 'next/image'
import { HeaderContainer } from './styles'
import { Handbag } from '@phosphor-icons/react'

import logoImg from '../../assets/logo.svg'
import { useCart } from '@/hooks/useCart'
import { Cart } from '../Cart'

export function Header() {
  const { cartItems, isLoadingBag, handleToggleLoading } = useCart()
  const cartQuantity = cartItems.length

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      {!isLoadingBag && (
        <button title="Adicionar á sacola" onClick={handleToggleLoading}>
          <Handbag size={20} color="#8D8D99" />
          {cartQuantity > 0 ? <span>{cartQuantity}</span> : ''}
        </button>
      )}

      <Cart />
    </HeaderContainer>
  )
}
