import { Container } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const publicKey = process.env.STRIPE_PUBLIC_KEY!

  return (
    <Container>
      <CartProvider
        shouldPersist
        cartMode="checkout-session"
        stripe={publicKey}
        currency="BRL"
      >
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
