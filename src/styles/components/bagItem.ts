import { styled } from '..'

export const BagContainer = styled('div', {
  display: 'flex',
  gap: '1.2rem',
  marginBottom: '1.2rem',

  img: {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    padding: '1rem',
    borderRadius: 5,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-evenly',
    gap: '0.5rem',

    p: {
      fontSize: 'md',
      color: '$gray300',
    },

    span: {
      fontSize: 'md',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      position: 'initial',
      border: 0,
      background: 0,
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '$green500',
      width: '1rem',
      transition: 'color 0.2s ease',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})
