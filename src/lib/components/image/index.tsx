import type { CSSProperties, HTMLAttributes, HTMLProps, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { DEFAULT_FALLBACK_IMAGE } from '../../const/images'
import { getIpfsURL } from '../../utils/ipfs'

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
  const lazyLoading = lazy === true ? 'lazy' : 'eager'
  const [imageURL, setImageURL] = useState<string>('')

  useEffect(() => {
    const cleanedImageURL = getIpfsURL(gateway, hash)
    setImageURL(cleanedImageURL)
  }, [hash, gateway])

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
    if (event.type === 'error') {
      setImageURL(fallbackImage)
    }
  }

  return (
    <img
      src={imageURL}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      loading={lazyLoading}
      onError={(event) => {
        handleImageError(event)
      }}
      {...props}
    />
  )
}
