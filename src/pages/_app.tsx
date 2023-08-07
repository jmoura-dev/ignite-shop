import { Container } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { CartContextProvider } from '@/context/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
