import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardFooter } from './CardFooter'

describe('CardFooter', () => {
  it('renders left content correctly', () => {
    render(<CardFooter left="Left Content" />)
    expect(screen.getByText('Left Content')).toBeInTheDocument()
  })

  it('renders right content correctly', () => {
    render(<CardFooter right="Right Content" />)
    expect(screen.getByText('Right Content')).toBeInTheDocument()
  })

  it('renders both left and right content', () => {
    render(<CardFooter left="Left" right="Right" />)
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('hides left content when showLeft is false', () => {
    render(<CardFooter left="Left Content" showLeft={false} />)
    expect(screen.queryByText('Left Content')).not.toBeInTheDocument()
  })

  it('hides right content when showRight is false', () => {
    render(<CardFooter right="Right Content" showRight={false} />)
    expect(screen.queryByText('Right Content')).not.toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<CardFooter left="Content" className="custom-class" data-testid="footer" />)
    expect(screen.getByTestId('footer')).toHaveClass('custom-class')
  })

  it('renders React nodes as left content', () => {
    render(<CardFooter left={<button data-testid="button">Click</button>} />)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  it('renders React nodes as right content', () => {
    render(<CardFooter right={<span data-testid="span">Text</span>} />)
    expect(screen.getByTestId('span')).toBeInTheDocument()
  })

  it('renders with both React nodes', () => {
    render(
      <CardFooter
        left={<button>Action</button>}
        right={<span>Info</span>}
      />
    )
    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Info')).toBeInTheDocument()
  })

  it('renders empty footer when no content provided', () => {
    const { container } = render(<CardFooter />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
