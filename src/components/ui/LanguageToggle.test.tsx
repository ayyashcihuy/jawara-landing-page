import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import LanguageToggle from './LanguageToggle'

describe('LanguageToggle', () => {
  it('renders with ID selected and red background', () => {
    const handle = vi.fn()
    render(<LanguageToggle lang="id" onChange={(l) => handle(l)} />)

    const btn = screen.getByRole('switch', { name: /lang-toggle/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('aria-checked', 'false')
    // background color when id is selected should be red-600
    expect(btn.className).toContain('bg-red-600')
  })

  it('toggles to en and calls onChange', () => {
    const handle = vi.fn()
    render(<LanguageToggle lang="id" onChange={handle} />)

    const btn = screen.getByRole('switch', { name: /lang-toggle/i })
    fireEvent.click(btn)

    expect(handle).toHaveBeenCalledWith('en')
  })
})
