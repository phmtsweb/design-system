import { Viewport } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  body: string
  providerProps: ComponentProps<typeof ToastProvider>
}

export function Toast({ title, body, providerProps, ...props }: ToastProps) {
  return (
    <ToastProvider {...providerProps}>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{body}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastContainer>
      <Viewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
