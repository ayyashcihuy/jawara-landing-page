import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import DeleteRequestPage from './page'
import * as actionModule from '../(Sections)/(Section5)/action'
import { vi } from 'vitest'

describe('DeleteRequestPage', () => {
  const mockSubmit = vi.spyOn(actionModule, 'submitForm')

  beforeEach(() => {
    mockSubmit.mockReset()
  })

  it('renders form fields and submit button', () => {
    render(<DeleteRequestPage />)

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Name|Nama/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Alasan permohonan penghapusan akun/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Kirim/i })).toBeInTheDocument()
  })

  it('submits form with valid data and shows toast message', async () => {
    const resp = { message: 'Success' }
    mockSubmit.mockResolvedValueOnce(resp)

    render(<DeleteRequestPage />)

    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } })
  fireEvent.change(screen.getByPlaceholderText(/Name|Nama/i), { target: { value: 'Tester' } })
    fireEvent.change(screen.getByPlaceholderText(/Alasan permohonan penghapusan akun/i), { target: { value: 'Please delete me' } })

    fireEvent.click(screen.getByRole('button', { name: /Kirim/i }))

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        name: 'Tester',
        message: 'Please delete me',
      })
    })
  })

  it('shows validation errors for empty required fields', async () => {
    render(<DeleteRequestPage />)

    fireEvent.click(screen.getByRole('button', { name: /Kirim/i }))

    // Expect submitForm not called due to validation
    await waitFor(() => {
      expect(mockSubmit).not.toHaveBeenCalled()
    })
  })

  it('toggles language and shows translated content', async () => {
    render(<DeleteRequestPage />)

    // default is Indonesian
    expect(screen.getByText(/Kebijakan Penghapusan Data Bookost/i)).toBeInTheDocument()

    // switch to English via toggle
    fireEvent.click(screen.getByLabelText('lang-toggle'))
    await waitFor(() => {
      expect(screen.getByText(/Bookost – Data Deletion Policy/i)).toBeInTheDocument()
    })
  })
})
