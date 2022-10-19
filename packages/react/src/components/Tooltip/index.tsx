import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode, useState } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode | ReactNode[]
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowTooltip() {
    setIsOpen(true)
  }

  function handleHideTooltip() {
    setIsOpen(false)
  }
  return (
    <TooltipPrimitive.Root open={isOpen}>
      <TooltipPrimitive.Trigger
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
        asChild
      >
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipContent {...props}>
        {content}
        <TooltipArrow width={11} height={5} />
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}

Tooltip.displayName = 'Tooltip'
