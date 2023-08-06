import { useState, type HTMLAttributes, useLayoutEffect } from 'react'
import { getIpfsURL } from '../../utils/ipfs'

export interface IpfsVideoProps extends HTMLAttributes<HTMLVideoElement> {
  hash: string
  gateway?: string
  muted?: boolean
}

export const VideoIPFS = ({ hash, gateway, muted = true }: IpfsVideoProps): JSX.Element => {
  const [videoUrl, setVideoUrl] = useState<string>('')

  useLayoutEffect(() => {
    const cleanedVideoURL = getIpfsURL(gateway, hash)
    setVideoUrl(cleanedVideoURL)
  }, [hash, gateway])

  return (
    <>
      <video autoPlay muted={muted} playsInline>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </>
  )
}
