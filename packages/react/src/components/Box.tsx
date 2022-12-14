import { ComponentProps } from '@stitches/react'
import { styled } from '../../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray600',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
