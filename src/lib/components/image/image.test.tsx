import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImageIPFS } from './index'

const MOCK_HASH = 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi'

describe('IPFSImage', () => {
  it('should render the IPFSImage component', () => {
    render(<ImageIPFS hash={MOCK_HASH} />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
  })

  it('should render the IPFSImage component with a specific gateway', () => {
    render(<ImageIPFS hash={MOCK_HASH} gateway="gateway.moralisipfs.com" />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveProperty(
      'src',
      'https://gateway.moralisipfs.com/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
    )
  })

  it('should render the IPFSImage component with default size', () => {
    render(<ImageIPFS hash={MOCK_HASH} gateway="gateway.moralisipfs.com" width="100" height="100" />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveProperty('width', 100)
    expect(image).toHaveProperty('height', 100)
  })

  it('should render the IPFSImage component with custom size', () => {
    render(<ImageIPFS hash={MOCK_HASH} width={200} height={200} />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveProperty('width', 200)
    expect(image).toHaveProperty('height', 200)
  })

  it('should render the IPFSImage component with custom alt', () => {
    render(<ImageIPFS hash={MOCK_HASH} alt="custom alt" />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image).toHaveProperty('alt', 'custom alt')
  })

  it('should render the IPFSImage component with lazy loading', () => {
    render(<ImageIPFS hash={MOCK_HASH} lazy={true} />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image.getAttribute('loading')).toBe('lazy')
  })

  it('should render the IPFSImage component with eager loading', () => {
    render(<ImageIPFS hash={MOCK_HASH} />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image.getAttribute('loading')).toBe('eager')
  })

  it('should render the IPFSImage component with custom props', () => {
    render(<ImageIPFS hash={MOCK_HASH} data-testid="custom-test-id" />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image.getAttribute('data-testid')).toBe('custom-test-id')
  })

  it('should render the IPFSImage component with custom style', () => {
    render(<ImageIPFS hash={MOCK_HASH} style={{ backgroundColor: 'red' }} />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image.getAttribute('style')).toBe('background-color: red;')
  })

  it('should render the IPFSImage component with custom className', () => {
    render(<ImageIPFS hash={MOCK_HASH} className="custom-class" />)
    const image = screen.getByRole('img')
    expect(image).toBeDefined()
    expect(image.getAttribute('class')).toBe('custom-class')
  })
})
