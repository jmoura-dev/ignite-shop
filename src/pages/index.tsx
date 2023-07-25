import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  '&:hover': {
    background: '$green300',
    cursor: 'pointer',
  },
})

export default function Home() {
  return <Button>Enviar</Button>
}
