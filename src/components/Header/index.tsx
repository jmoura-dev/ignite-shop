import Image from 'next/image'
import { HeaderContainer, Sidebar } from './styles'
import { Handbag, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { BagItem } from '../BagItem'

import logoImg from '../../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'

interface ArrayCart {
  id: string
  name: string
  price: number
}

export function Header() {
  const [isLoadingBag, setIsLoadingBag] = useState<boolean>(false)
  const [arrayCart, setArrayCart] = useState<ArrayCart[]>([])

  const { cartCount, cartDetails, removeItem } = useShoppingCart()

  function handleOpenBag() {
    setIsLoadingBag(true)
  }

  function handleClosedBag() {
    setIsLoadingBag(false)
  }

  console.log(cartDetails)

  useEffect(() => {
    setArrayCart(Object.values(Object(cartDetails)))
  }, [cartDetails])

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      {!isLoadingBag && (
        <button title="Adicionar á sacola" onClick={handleOpenBag}>
          <Handbag size={20} color="#8D8D99" />
          {cartCount ? <span>{cartCount}</span> : ''}
        </button>
      )}

      {isLoadingBag && (
        <Sidebar>
          <button onClick={handleClosedBag}>
            <X size={18} color="#8D8D99" weight="bold" />
          </button>

          <h1>Sacola de compras</h1>

          {arrayCart.length < 1 && (
            <section>Você ainda não adicionou nenhum item ao carrinho</section>
          )}

          <ul>
            {arrayCart &&
              arrayCart.map((item) => {
                return (
                  <BagItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    onClick={() => removeItem(item.id)}
                  />
                )
              })}
          </ul>

          <footer>
            <div>
              <span>Quantidade</span>
              <p>
                {cartCount === 1 ? `${cartCount} item` : `${cartCount} itens`}
              </p>
            </div>

            <div>
              <strong>Valor total</strong>
              <h2>R$ 270,00</h2>
            </div>

            <button>Finalizar compra</button>
          </footer>
        </Sidebar>
      )}
    </HeaderContainer>
  )
}
