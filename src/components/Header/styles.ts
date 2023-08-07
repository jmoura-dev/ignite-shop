import { keyframes, styled } from '@stitches/react'

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0 3rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    position: 'relative',
    display: 'flex',
    padding: '0.5rem',
    borderRadius: 4,
    border: 0,
    background: '$gray800',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    animation: `${lowOpacity} 0.3s linear`,

    '&:hover': {
      background: '$green300',
    },

    span: {
      display: 'flex',
      position: 'absolute',
      top: '-10%',
      right: '-10%',
      color: 'white',
      background: '$green500',
      borderRadius: '50%',
      width: '1rem',
      height: '1rem',
      alignItems: 'center',
      justifyContent: 'center',

      fontSize: '0.75rem',
    },
  },
})
