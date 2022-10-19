import { Button, Tooltip, TooltipProps } from '@lamti-ui/react'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Schedule</Button>,
    content: '16/04/2022 - Disponível',
    open: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [(Story) => <TooltipProvider>{Story()}</TooltipProvider>],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
