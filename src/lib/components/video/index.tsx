import { useLayoutEffect, useState, type HTMLAttributes, type ReactNode, useRef, useEffect } from 'react'
import { getIpfsURL } from '../../utils/ipfs'

const DefaultLoadingComponent = (): JSX.Element => {
  return <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">Loading...</div>
}

export interface IpfsVideoProps extends HTMLAttributes<HTMLVideoElement> {
  hash: string
  gateway?: string
  muted?: boolean
  loop?: boolean
  loadingComponent?: ReactNode
  thumbnail?: string
  volume?: number
  width?: number
  height?: number
}

export const VideoIPFS = ({
  hash,
  gateway,
  muted = true,
  loop = true,
  loadingComponent = <DefaultLoadingComponent />,
  volume = 1,
  thumbnail,
  width = 500,
  height = 500,
  ...rest
}: IpfsVideoProps): JSX.Element => {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current !== undefined && videoRef.current !== null) {
      videoRef.current.volume = volume
    }
  }, [volume])

  useLayoutEffect(() => {
    const cleanedVideoURL = getIpfsURL(gateway, hash)
    setVideoUrl(cleanedVideoURL)
  }, [hash, gateway])

  const handleLoadedData = (): void => {
    setLoading(false)
  }

  return (
    <>
      <div className="relative">
        {loading && loadingComponent}
        {thumbnail !== undefined && videoUrl === undefined && (
          <img src={thumbnail} className="absolute top-0 left-0 w-full h-full object-cover" />
        )}
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop={loop}
          playsInline
          width={width}
          height={height}
          {...rest}
          onLoadedData={handleLoadedData}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
