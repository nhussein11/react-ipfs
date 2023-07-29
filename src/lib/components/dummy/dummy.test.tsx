import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dummy } from './index'

// The two tests marked with concurrent will be run in parallel
describe('Dummy Component', () => {
  it('renders button with the correct label', () => {
    const label = 'Test Label'
    render(<Dummy label={label} />)
    expect(screen.getByText(label)).toBeDefined()
  })
})
