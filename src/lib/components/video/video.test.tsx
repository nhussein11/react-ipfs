import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoIPFS } from './index'

describe('IPFSVideo', () => {
  it('should render the IPFSVideo component', () => {
    render(<VideoIPFS hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ" />)
    const video = document.querySelector('video')
    expect(video).toBeDefined()
  })
  it('should render the IPFSVideo component with a thumbnail', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
  })
  it('should render the IPFSVideo component with a gateway', () => {
    render(<VideoIPFS hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ" gateway="https://ipfs.io/ipfs/" />)
    const video = document.querySelector('video')
    expect(video).toBeDefined()
  })

  it('should render the IPFSVideo component with a gateway and a thumbnail', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
  })
  it('should render the IPFSVideo component with a gateway and a thumbnail and a loading component', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    const loading = screen.getByText('Loading...')
    expect(loading).toBeDefined()
  })
})
