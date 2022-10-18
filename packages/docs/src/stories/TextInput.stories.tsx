import { Box, Text, TextInput, TextInputProps } from '@lamti-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Name</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type here...',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
