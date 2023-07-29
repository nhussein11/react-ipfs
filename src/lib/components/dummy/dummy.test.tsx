import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dummy } from './index'

// The two tests marked with concurrent will be run in parallel
describe('Dummy', () => {
  it('should render', async () => {
    render(<Dummy />)
    // Use getByText to find the rendered text content
    const dummyElement = document.querySelector('div')
    const dummyText = dummyElement.textContent

    // Check if the component renders the expected text
    expect(dummyText).toBe('Dummy')
  })
})
