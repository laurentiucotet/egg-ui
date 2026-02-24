import type { Meta, StoryObj } from '@storybook/react'
// @ts-ignore: test utilities may not have types
import { expect, userEvent } from 'storybook/test'

import { TextArea, type TextAreaProps } from './TextArea'

const meta: Meta<TextAreaProps> = {
  title: 'UI / TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    variant: 'default',
    disabled: false,
    placeholder: 'Type some text...',
    rows: 3,
  },
}

export default meta

export const Default: StoryObj<TextAreaProps> = {
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement
    await userEvent.type(textarea, 'lorem ipsum')
    await expect(textarea).toHaveValue('lorem ipsum')
  },
}

export const Error: StoryObj<TextAreaProps> = {
  args: { variant: 'error', placeholder: 'Error state' },
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement
    await expect(textarea).toHaveClass('border-red-500')
  },
}
