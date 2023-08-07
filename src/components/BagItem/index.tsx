import { BagContainer } from './styles'
import Image from 'next/image'

interface BagItemProps {
  name: string
  price: string
  image: string
  onClick: () => void
}

export function BagItem({ name, price, image, onClick }: BagItemProps) {
  return (
    <BagContainer>
      <Image src={image} width={110} height={100} alt="" />

      <div>
        <p>{name}</p>
        <span>{price}</span>
        <button onClick={onClick}>Remover</button>
      </div>
    </BagContainer>
  )
}
