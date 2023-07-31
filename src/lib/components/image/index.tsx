import type { CSSProperties, HTMLAttributes, HTMLProps, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { getIpfsURL } from '../../utils/ipfs'
import { DEFAULT_FALLBACK_IMAGE } from '../../const/images'

export interface IpfsImageProps extends HTMLAttributes<HTMLImageElement> {
  hash: string
  gateway?: string
  width?: number
  height?: number
  alt?: string
  lazy?: boolean
  style?: CSSProperties
  className?: HTMLProps<HTMLElement>['className']
  fallbackImage?: string
}

export const ImageIPFS = ({
  hash,
  gateway,
  width = 100,
  height = 100,
  alt = 'IPFS Image',
  lazy,
  style,
  className,
  fallbackImage = DEFAULT_FALLBACK_IMAGE,
  ...props
}: IpfsImageProps): JSX.Element => {
  const imgLoading = lazy === true ? 'lazy' : 'eager'
  const [imgSrc, setImgSrc] = useState<string>('')

  useEffect(() => {
    const imgSrcCleaned = getIpfsURL(gateway, hash)
    setImgSrc(imgSrcCleaned)
  }, [hash, gateway])

  const handleOnError = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
    if (event.type === 'error') {
      setImgSrc(fallbackImage)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      loading={imgLoading}
      onError={(event) => {
        handleOnError(event)
      }}
      {...props}
    />
  )
}
