import { BagContainer } from '@/styles/components/bagItem'
import Image from 'next/image'

import Logo from '../assets/logo.svg'

export function BagItem() {
  return (
    <BagContainer>
      <Image src={Logo} width={110} height={100} alt="" />

      <div>
        <p>Camiseta Ignite Lab | ReactJS</p>
        <span>R$ 62,90</span>
        <button>Remover</button>
      </div>
    </BagContainer>
  )
}
