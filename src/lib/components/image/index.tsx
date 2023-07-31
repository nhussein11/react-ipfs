import type { CSSProperties, HTMLAttributes, HTMLProps } from 'react'
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
}

export const ImageIPFS = ({
  hash,
  gateway,
  width,
  height,
  alt,
  lazy,
  style,
  className,
  ...props
}: IpfsImageProps): JSX.Element => {
  const imgSrc = getIpfsURL(gateway, hash)
  const imgWidth = width ?? 100
  const imgHeight = height ?? 100
  const imgAlt = alt ?? 'IPFS Image'
  const imgLoading = lazy === true ? 'lazy' : 'eager'

  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      width={imgWidth}
      height={imgHeight}
      style={style}
      className={className}
      loading={imgLoading}
      {...props}
    />
  )
}
