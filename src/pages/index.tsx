import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import Link from 'next/link'

import Head from 'next/head'
import { MouseEvent } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { Handbag } from '@phosphor-icons/react'
import { Header } from '@/components/Header'
import { useCart } from '@/hooks/useCart'
import { ProductProps } from '@/context/cartContext'

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.3,
      spacing: 48,
    },
  })

  const { AddNewItemToCart, checkIfItemAlreadyExists } = useCart()

  function handleAddNewItemToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ProductProps,
    productId: string,
  ) {
    e.preventDefault()
    AddNewItemToCart(product)
    checkIfItemAlreadyExists(productId)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  priority
                  width={380}
                  height={380}
                  alt=""
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button
                    title="Adicionar á sacola"
                    onClick={(e) =>
                      handleAddNewItemToCart(e, product, product.id)
                    }
                    disabled={checkIfItemAlreadyExists(product.id)}
                  >
                    <Handbag size={20} color="white" weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
      unitPrice: price.unit_amount! / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
