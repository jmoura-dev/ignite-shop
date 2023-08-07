import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '@/styles/pages/success'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  productImages: string[]
}

export default function Success({ customerName, productImages }: SuccessProps) {
  const imagesQuantity = productImages.length

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productImages.map((image) => {
            return (
              <ImageContainer key={image}>
                <Image src={image} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuu! <strong>{customerName}</strong>, sua compra de{' '}
          <strong>
            {imagesQuantity > 1
              ? `${imagesQuantity} camisetas`
              : `${imagesQuantity} camiseta`}
          </strong>{' '}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

// # Opções para fetch de dados;
// Client-side (useEffect) / getServerSideProps / getStaticProps;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productImages,
    },
  }
}
