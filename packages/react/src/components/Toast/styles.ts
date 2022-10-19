import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const slideRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(100%)' },
})

export const ToastContainer = styled(Toast.Root, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${slideRight} 100ms ease-out`,
    },
  },
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  zIndex: 999,
  borderRadius: '$sm',
  width: 360,
  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
  fontFamily: '$default',
})
export const ToastDescription = styled(Toast.Description, {
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  fontFamily: '$default',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  border: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  padding: 0,
  backgroundColor: 'transparent',
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 0,
  top: 16,
  right: 16,
  cursor: 'pointer',

  svg: {
    color: '$gray200',
    width: 11.25,
    height: 11.25,
  },

  '&:hover': {
    svg: {
      color: '$gray400',
    },
  },
})
