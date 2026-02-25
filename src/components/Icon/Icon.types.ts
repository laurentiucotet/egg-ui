export type IconName = 'bell' | 'settings' | 'chevron'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** which icon to render */
  name: IconName
  /** visual size variants (mapping to pixel values) */
  size?: 'sm' | 'md' | 'lg'
  /** color css value (will be passed to svg `color`/`stroke`) */
  color?: string
}
