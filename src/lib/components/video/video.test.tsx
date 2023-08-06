import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoIPFS } from './index'

describe('IPFSVideo', () => {
  it('should render the IPFSVideo component', () => {
    render(<VideoIPFS />)
    const video = document.querySelector('video')
    expect(video).toBeDefined()
  })
})
