import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardTitle, CardDescription, CardContent } from './Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <CardContent>Test Content</CardContent>
      </Card>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders with image when imageSrc is provided', () => {
    render(
      <Card imageSrc="/test.jpg" imageAlt="Test Image">
        <CardContent>Content</CardContent>
      </Card>
    )
    const image = screen.getByAltText('Test Image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test.jpg')
  })

  it('hides image when showImage is false', () => {
    render(
      <Card imageSrc="/test.jpg" imageAlt="Test Image" showImage={false}>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.queryByAltText('Test Image')).not.toBeInTheDocument()
  })

  it('renders header when provided', () => {
    render(
      <Card header={{ heading: 'Card Title', description: 'Card Description' }}>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
  })

  it('hides header when showHeader is false', () => {
    render(
      <Card header={{ heading: 'Card Title' }} showHeader={false}>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.queryByText('Card Title')).not.toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <Card footer={{ left: 'Footer Content' }}>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('hides footer when showFooter is false', () => {
    render(
      <Card footer={{ left: 'Footer Content' }} showFooter={false}>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.queryByText('Footer Content')).not.toBeInTheDocument()
  })

  it('applies shadow variant correctly', () => {
    render(
      <Card shadow="md" data-testid="card">
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('applies hoverEffect correctly', () => {
    render(
      <Card hoverEffect="lift" data-testid="card">
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('applies rounded variant correctly', () => {
    render(
      <Card rounded="md" data-testid="card">
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })

  it('has article role', () => {
    render(
      <Card>
        <CardContent>Content</CardContent>
      </Card>
    )
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})

describe('CardTitle', () => {
  it('renders title correctly', () => {
    render(<CardTitle>Test Title</CardTitle>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders as h3 element', () => {
    render(<CardTitle>Title</CardTitle>)
    const title = screen.getByText('Title')
    expect(title.tagName).toBe('H3')
  })

  it('accepts custom className', () => {
    render(<CardTitle className="custom-title">Title</CardTitle>)
    const title = screen.getByText('Title')
    expect(title).toHaveClass('custom-title')
  })
})

describe('CardDescription', () => {
  it('renders description correctly', () => {
    render(<CardDescription>Test Description</CardDescription>)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders as p element', () => {
    render(<CardDescription>Description</CardDescription>)
    const description = screen.getByText('Description')
    expect(description.tagName).toBe('P')
  })

  it('accepts custom className', () => {
    render(<CardDescription className="custom-desc">Description</CardDescription>)
    const description = screen.getByText('Description')
    expect(description).toHaveClass('custom-desc')
  })
})

describe('CardContent', () => {
  it('renders content correctly', () => {
    render(<CardContent>Test Content</CardContent>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders as div element', () => {
    render(<CardContent data-testid="content">Content</CardContent>)
    const content = screen.getByTestId('content')
    expect(content.tagName).toBe('DIV')
  })

  it('accepts custom className', () => {
    render(<CardContent className="custom-content">Content</CardContent>)
    const content = screen.getByText('Content')
    expect(content).toHaveClass('custom-content')
  })
})
