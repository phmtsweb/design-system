import { Toast, ToastProps } from '@lamti-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Warning',
    body: 'Be careful',
    open: true,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
