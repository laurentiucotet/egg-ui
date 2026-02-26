import type { Meta, StoryObj } from '@storybook/react-vite'
import { CardHeader } from './CardHeader'
import { Badge } from '../Badge'
import { Icon } from '../Icon/Icon'
import { iconArgTypes } from '../Icon/Icon.stories'
import { badgeArgTypes } from '../Badge/Badge.stories'
import type { IconName } from '../Icon/Icon.types'
import type { CardHeaderProps } from './CardHeader.types'

interface CardHeaderStoryArgs
  extends CardHeaderProps,
    React.HTMLAttributes<HTMLDivElement> {
  iconName?: IconName
  badgeText?: string
  badgeVariant?: 'neutral' | 'info' | 'success' | 'warning' | 'danger'
  badgeSize?: 'sm' | 'md' | 'lg'
}

const meta: Meta<typeof CardHeader> = {
  title: 'UI/Card/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    icon: { control: 'object', table: { disable: true } },
    // reuse the icon story controls for consistency
    iconName: {
      // reuse the base icon argType from the Icon story
      ...(iconArgTypes.name as unknown as Record<string, unknown>),
      if: { arg: 'showIcon', eq: true },
      table: { category: 'Icon' },
    },
    showIcon: { control: 'boolean', table: { category: 'Icon' } },
    heading: { control: 'text', if: { arg: 'showTitle', eq: true }, table: { category: 'Text' } },
    showTitle: { control: 'boolean', table: { category: 'Text' } },
    description: { control: 'text', if: { arg: 'showDescription', eq: true }, table: { category: 'Text' } },
    showDescription: { control: 'boolean', table: { category: 'Text' } },
    showBadge: { control: 'boolean', table: { category: 'Badge' } },
    badgeText: {
      control: 'text',
      if: { arg: 'showBadge', eq: true },
      table: { category: 'Badge' },
    },
    // reuse the Badge story controls for consistency
    badgeVariant: {
      ...(badgeArgTypes.variant as unknown as Record<string, unknown>),
      if: { arg: 'showBadge', eq: true },
      table: { category: 'Badge' },
    },
    badgeSize: {
      ...(badgeArgTypes.size as unknown as Record<string, unknown>),
      if: { arg: 'showBadge', eq: true },
      table: { category: 'Badge' },
    },
    showMenu: { control: 'boolean', table: { category: 'Menu' } },
    menu: { control: 'object', table: { category: 'Menu' } },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any, // story args extend original props
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    iconName: 'bell',
    icon: undefined,

    heading: 'Card Title',
    description: 'Card description',
    showBadge: true,
    badgeText: 'New',
    badgeVariant: 'neutral',
    badgeSize: 'md',
    showTitle: true,
    showDescription: true,
    showMenu: true,
    className: '',
    showIcon: true,
  } as CardHeaderStoryArgs,
  render: (allArgs: CardHeaderStoryArgs) => {
    const {
      badgeText,
      badgeVariant,
      badgeSize,
      showBadge,
      iconName,
      ...args
    } = allArgs

    const badge = showBadge
      ? (badgeText && (
          <Badge variant={badgeVariant} size={badgeSize}>
            {badgeText}
          </Badge>
        ))
      : undefined

    const iconElement = iconName ? <Icon name={iconName} size="md" /> : undefined

    return <CardHeader {...args} showBadge={showBadge} icon={iconElement} badge={badge} />
  },
}

export const NoBadge: StoryObj<typeof meta> = {
  args: {
    iconName: "bell",
    heading: "Card Title",
    description: "Card description",
    showBadge: false,
    badgeText: "New",
    badgeVariant: "neutral",
    badgeSize: "md",
    showTitle: true,
    showDescription: true,
    showMenu: true,
    className: "",
    showIcon: true
  },

  render: (allArgs: CardHeaderStoryArgs) => {
    const {
      badgeText,
      badgeVariant,
      badgeSize,
      showBadge,
      iconName,
      ...args
    } = allArgs;

    const badge = showBadge ? (badgeText && (<Badge variant={badgeVariant} size={badgeSize}>
      {badgeText}
    </Badge>)) : undefined;

    const iconElement = iconName ? <Icon name={iconName} size="md" /> : undefined;

    return <CardHeader {...args} showBadge={showBadge} icon={iconElement} badge={badge} />;
  }
};

export const JustTitle: StoryObj<typeof meta> = {
  args: {
    iconName: "bell",
    heading: "Card Title",
    description: "Card description",
    showBadge: false,
    badgeText: "New",
    badgeVariant: "neutral",
    badgeSize: "md",
    showTitle: true,
    showDescription: false,
    showMenu: true,
    className: "",
    showIcon: false
  },

  render: (allArgs: CardHeaderStoryArgs) => {
    const {
      badgeText,
      badgeVariant,
      badgeSize,
      showBadge,
      iconName,
      ...args
    } = allArgs;

    const badge = showBadge ? (badgeText && (<Badge variant={badgeVariant} size={badgeSize}>
      {badgeText}
    </Badge>)) : undefined;

    const iconElement = iconName ? <Icon name={iconName} size="md" /> : undefined;

    return <CardHeader {...args} showBadge={showBadge} icon={iconElement} badge={badge} />;
  }
};
