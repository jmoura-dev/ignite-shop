import { keyframes, styled } from '@stitches/react'

const rightLeft = keyframes({
  '0%': { transform: 'translateX(50%)', opacity: '0' },
  '100%': { transform: 'translateX(0)', opacity: '1' },
})

export const Sidebar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  zIndex: '1',
  position: 'absolute',
  right: '0',
  bottom: '0',
  height: 'calc(100vh)',
  background: '$gray800',
  padding: '0 3rem',
  animation: `${rightLeft} 0.3s linear`,
  boxShadow: '2px 2px 7px 4px black',

  minWidth: '26rem',

  section: {
    margin: '5rem 0',
    color: '$green300',
    fontSize: '1rem',
    textAlign: 'center',
  },

  '> button': {
    display: 'flex',
    alignSelf: 'flex-end',
    width: '2rem',
    marginTop: '2rem',
    border: 0,
    background: 'none',
    cursor: 'pointer',
  },

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray100',
    margin: '2.5rem 0 2rem',
  },

  footer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '0.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',

      span: {
        fontSize: '1rem',
        color: '$gray100',
      },

      p: {
        fontSize: '$md',
        color: '$gray300',
      },

      strong: {
        fontSize: '$md',
        color: '$gray100',
        fontWeight: 'bold',
      },

      h2: {
        fontSize: '$xl',
        color: '$gray100',
        fontWeight: 'bold',
      },
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'initial',
      background: '$green500',
      padding: '1.25rem 2rem',

      color: 'white',
      fontSize: '$md',
      fontWeight: 'bold',

      marginTop: '4rem',
      borderRadius: 6,
      transition: 'background 0.2s ease',

      '&:hover': {
        background: '$green300',
      },
    },
  },
})
