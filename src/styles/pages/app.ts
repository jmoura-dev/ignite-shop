import { keyframes, styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 0.5rem',
  overflowX: 'hidden',
})

const lowOpacity = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const Header = styled('header', {
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

const rightLeft = keyframes({
  '0%': { transform: 'translateX(100%)', opacity: '0' },
  '100%': { transform: 'translateX(0)', opacity: '1' },
})

export const Sidebar = styled('div', {
  zIndex: '1',
  position: 'absolute',
  right: '0',
  height: 'calc(100vh - 4rem)',
  background: '$gray800',
  padding: '2rem 3rem',
  animation: `${rightLeft} 0.3s linear`,
  boxShadow: '2px 2px 7px 4px black',

  button: {
    display: 'flex',
    position: 'absolute',
    top: '4%',
    right: '7%',

    border: 0,
    background: 'none',
    cursor: 'pointer',
  },

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray100',
    margin: '2rem 0 2rem',
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
