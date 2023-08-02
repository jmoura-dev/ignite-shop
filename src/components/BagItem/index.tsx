import { BagContainer } from './styles'
import Image from 'next/image'

import Logo from '../../assets/logo.svg'

interface BagItemProps {
  name: string
  price: number
  onClick: () => void
}

export function BagItem({ name, price, onClick }: BagItemProps) {
  return (
    <BagContainer>
      <Image src={Logo} width={110} height={100} alt="" />

      <div>
        <p>{name}</p>
        <span>{`R$ ${price}`}</span>
        <button onClick={onClick}>Remover</button>
      </div>
    </BagContainer>
  )
}
