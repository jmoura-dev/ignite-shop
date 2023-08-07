import { X } from '@phosphor-icons/react'
import { BagItem } from '../BagItem'
import { Sidebar } from './styles'
import { useCart } from '@/hooks/useCart'
import { useState } from 'react'
import axios from 'axios'

export function Cart() {
  const { isLoadingBag, handleToggleLoading } = useCart()

  const { cartItems, removeItemCart, cartTotalPrice } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalPrice)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao ser redirecionado ao checkout')
    }
  }

  return (
    <>
      {isLoadingBag && (
        <Sidebar>
          <button onClick={handleToggleLoading}>
            <X size={18} color="#8D8D99" weight="bold" />
          </button>

          <h1>Sacola de compras</h1>

          {cartQuantity < 1 && (
            <section>Você ainda não adicionou nenhum item ao carrinho</section>
          )}

          <ul>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <BagItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.imageUrl}
                    onClick={() => removeItemCart(item.id)}
                  />
                )
              })}
          </ul>

          <footer>
            <div>
              <span>Quantidade</span>
              <p>
                {cartQuantity === 1
                  ? `${cartQuantity} item`
                  : `${cartQuantity} itens`}
              </p>
            </div>

            <div>
              <strong>Valor total</strong>
              <h2>{formattedCartTotalPrice}</h2>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCreatingCheckoutSession || cartQuantity < 1}
            >
              Finalizar compra
            </button>
          </footer>
        </Sidebar>
      )}
    </>
  )
}
