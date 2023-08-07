import { ReactNode, createContext, useState } from 'react'

export interface ProductProps {
  id: string
  name: string
  price: string
  unitPrice: number
  description: string
  imageUrl: string
  defaultPriceId: string
}

interface CartItemsProps {
  cartItems: ProductProps[]
  cartTotalPrice: number
  isLoadingBag: boolean
  handleToggleLoading: () => void
  AddNewItemToCart: (product: ProductProps) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
  removeItemCart: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartItemsProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([])
  const [isLoadingBag, setIsLoadingBag] = useState<boolean>(false)

  function handleToggleLoading() {
    if (isLoadingBag) {
      setIsLoadingBag(false)
    } else {
      setIsLoadingBag(true)
    }
  }

  const cartTotalPrice = cartItems.reduce((total, product) => {
    return total + product.unitPrice
  }, 0)

  function AddNewItemToCart(product: ProductProps) {
    setCartItems((state) => [...state, product])
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  function removeItemCart(productId: string) {
    setCartItems(cartItems.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        isLoadingBag,
        cartTotalPrice,
        cartItems,
        AddNewItemToCart,
        checkIfItemAlreadyExists,
        removeItemCart,
        handleToggleLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
