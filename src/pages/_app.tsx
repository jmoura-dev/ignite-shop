import { Container, Header, Sidebar } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Handbag, X } from '@phosphor-icons/react'
import { BagItem } from '@/components/BagItem'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isLoadingBag, setIsLoadingBag] = useState<boolean>(true)

  function handleOpenBag() {
    setIsLoadingBag(true)
  }

  function handleClosedBag() {
    setIsLoadingBag(false)
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        {!isLoadingBag && (
          <button title="Adicionar á sacola" onClick={handleOpenBag}>
            <Handbag size={20} color="#8D8D99" />
            <span>1</span>
          </button>
        )}
      </Header>

      {isLoadingBag && (
        <Sidebar>
          <button onClick={handleClosedBag}>
            <X size={18} color="#8D8D99" weight="bold" />
          </button>

          <h1>Sacola de compras</h1>
          <BagItem />
          <BagItem />
          <BagItem />

          <footer>
            <div>
              <span>Quantidade</span>
              <p>3 itens</p>
            </div>

            <div>
              <strong>Valor total</strong>
              <h2>R$ 270,00</h2>
            </div>

            <button>Finalizar compra</button>
          </footer>
        </Sidebar>
      )}

      <Component {...pageProps} />
    </Container>
  )
}
