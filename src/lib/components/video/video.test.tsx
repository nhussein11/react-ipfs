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
  it('should render the IPFSVideo component with a gateway and a thumbnail and a loading component and muted', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
        muted
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    const loading = screen.getByText('Loading...')
    expect(loading).toBeDefined()
    const muted = video?.getAttribute('muted')
    expect(muted).toBeDefined()
  })
  it('should render the IPFSVideo component with a gateway and a thumbnail and a loading component and muted and autoplay', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
        muted
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    const loading = screen.getByText('Loading...')
    expect(loading).toBeDefined()
    const muted = video?.getAttribute('muted')
    expect(muted).toBeDefined()
    const autoplay = video?.getAttribute('autoplay')
    expect(autoplay).toBeDefined()
  })
  it('should render the IPFSVideo component with a gateway and a thumbnail and a loading component and muted and autoplay and loop', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
        muted
        loop
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    const loading = screen.getByText('Loading...')
    expect(loading).toBeDefined()
    const muted = video?.getAttribute('muted')
    expect(muted).toBeDefined()
    const autoplay = video?.getAttribute('autoplay')
    expect(autoplay).toBeDefined()
    const loop = video?.getAttribute('loop')
    expect(loop).toBeDefined()
  })
  it('should render the IPFSVideo component with a gateway and a thumbnail and a loading component and muted and autoplay and loop and controls', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
        muted
        loop
        controls
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    const loading = screen.getByText('Loading...')
    expect(loading).toBeDefined()
    const muted = video?.getAttribute('muted')
    expect(muted).toBeDefined()
    const autoplay = video?.getAttribute('autoplay')
    expect(autoplay).toBeDefined()
    const loop = video?.getAttribute('loop')
    expect(loop).toBeDefined()
    const controls = video?.getAttribute('controls')
    expect(controls).toBeDefined()
  })
  it('should render the IPFSVideo component with specific volume', () => {
    render(
      <VideoIPFS
        hash="Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ"
        gateway="https://ipfs.io/ipfs/"
        thumbnail="https://ipfs.io/ipfs/QmZ9y1Vd7X9s8XG4Zz1Xh7k2Lj6Z5oQ6c5sJgU7h6LQ3bC"
        loadingComponent={<div>Loading...</div>}
        muted
        loop
        controls
        volume={0.5}
      />,
    )
    const video = document.querySelector('video')
    expect(video).toBeDefined()
    expect(video.volume).toBe(0.5)
  })
})
