import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  letterSpacing: -0.09,
  lineHeight: '$short',
  textAlign: 'center',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: 11,
  height: 5,
})
