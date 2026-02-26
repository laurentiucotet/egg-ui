import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PopoverMenu } from './PopoverMenu'
import { User, Settings, LogOut } from 'lucide-react'

describe('PopoverMenu', () => {
  it('renders trigger element', () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Item 1" />
      </PopoverMenu>
    )

    expect(screen.getByText('Open Menu')).toBeInTheDocument()
  })

  it('opens menu when trigger is clicked', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })
  })

  it('closes menu when clicking outside', async () => {
    render(
      <div>
        <PopoverMenu trigger={<button>Open Menu</button>}>
          <PopoverMenu.Item label="Profile" />
        </PopoverMenu>
        <div data-testid="outside">Outside</div>
      </div>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    const outside = screen.getByTestId('outside')
    fireEvent.mouseDown(outside)

    await waitFor(() => {
      expect(screen.queryByText('Profile')).not.toBeInTheDocument()
    })
  })

  it('closes menu when Escape key is pressed', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: 'Escape' })

    await waitFor(() => {
      expect(screen.queryByText('Profile')).not.toBeInTheDocument()
    })
  })

  it('closes menu when item is clicked by default', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    const item = screen.getByText('Profile')
    fireEvent.click(item)

    await waitFor(() => {
      expect(screen.queryByText('Profile')).not.toBeInTheDocument()
    })
  })

  it('does not close menu when closeOnItemClick is false', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>} closeOnItemClick={false}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    const item = screen.getByText('Profile')
    fireEvent.click(item)

    // Menu should still be open
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('calls onSelect when item is clicked', async () => {
    const onSelect = vi.fn()

    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Profile" onSelect={onSelect} />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    const item = screen.getByText('Profile')
    fireEvent.click(item)

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it('calls onOpenChange when menu opens and closes', async () => {
    const onOpenChange = vi.fn()

    render(
      <PopoverMenu trigger={<button>Open Menu</button>} onOpenChange={onOpenChange}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    expect(onOpenChange).toHaveBeenCalledWith(true)

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })

    const item = screen.getByText('Profile')
    fireEvent.click(item)

    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders menu items with icons', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item icon={<User data-testid="user-icon" />} label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('user-icon')).toBeInTheDocument()
    })
  })

  it('renders menu items with actions', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item
          label="Notifications"
          action={<span data-testid="badge">3</span>}
        />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('badge')).toBeInTheDocument()
    })
  })

  it('renders active menu items with correct styling', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Active Item" active />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      const item = screen.getByText('Active Item')
      expect(item).toHaveClass('bg-[var(--color-primary)]')
    })
  })

  it('renders disabled menu items', async () => {
    const onSelect = vi.fn()

    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Disabled Item" disabled onSelect={onSelect} />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      const item = screen.getByText('Disabled Item')
      expect(item).toBeDisabled()
    })

    const item = screen.getByText('Disabled Item')
    fireEvent.click(item)

    expect(onSelect).not.toHaveBeenCalled()
  })

  it('renders separator', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Item label="Item 1" />
        <PopoverMenu.Separator data-testid="separator" />
        <PopoverMenu.Item label="Item 2" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('separator')).toBeInTheDocument()
    })
  })

  it('renders label', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Label>Section Title</PopoverMenu.Label>
        <PopoverMenu.Item label="Item 1" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Section Title')).toBeInTheDocument()
    })
  })

  it('supports controlled open state', async () => {
    const { rerender } = render(
      <PopoverMenu trigger={<button>Open Menu</button>} open={false}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    expect(screen.queryByText('Profile')).not.toBeInTheDocument()

    rerender(
      <PopoverMenu trigger={<button>Open Menu</button>} open={true}>
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument()
    })
  })

  it('applies custom className to menu content', async () => {
    render(
      <PopoverMenu
        trigger={<button>Open Menu</button>}
        className="custom-class"
      >
        <PopoverMenu.Item label="Profile" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      const content = screen.getByText('Profile').closest('div')
      expect(content).toHaveClass('custom-class')
    })
  })

  it('renders complex menu with multiple sections', async () => {
    render(
      <PopoverMenu trigger={<button>Open Menu</button>}>
        <PopoverMenu.Label>Account</PopoverMenu.Label>
        <PopoverMenu.Item icon={<User />} label="Profile" />
        <PopoverMenu.Item icon={<Settings />} label="Settings" />
        <PopoverMenu.Separator />
        <PopoverMenu.Label>Actions</PopoverMenu.Label>
        <PopoverMenu.Item icon={<LogOut />} label="Logout" />
      </PopoverMenu>
    )

    const trigger = screen.getByText('Open Menu')
    fireEvent.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Account')).toBeInTheDocument()
      expect(screen.getByText('Profile')).toBeInTheDocument()
      expect(screen.getByText('Settings')).toBeInTheDocument()
      expect(screen.getByText('Actions')).toBeInTheDocument()
      expect(screen.getByText('Logout')).toBeInTheDocument()
    })
  })
})
