import React from 'react'
import { Bell, Settings, ChevronRight } from 'lucide-react'
import { icon } from './Icon.styles'
import type { IconVariantProps } from './Icon.styles'
import type { IconProps, IconName } from './Icon.types'

const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  bell: Bell,
  settings: Settings,
  chevron: ChevronRight,
}

const pixelSize = (size: IconProps['size']) => {
  switch (size) {
    case 'sm':
      return 16
    case 'lg':
      return 24
    default:
      return 20
  }
}

export const Icon: React.FC<IconProps & IconVariantProps> = ({
  name,
  size = 'md',
  color,
  className,
  ...props
}) => {
  const Component = iconMap[name]
  return (
    <Component
      className={icon({ size, className })}
      size={pixelSize(size)}
      color={color}
      {...props}
    />
  )
}

export default Icon
