import { Box, MultiStep, MultiStepProps } from '@lamti-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
