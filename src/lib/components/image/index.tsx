import { type ImgHTMLAttributes } from 'react'
import { getIpfsURL } from '../../utils/ipfs'

export interface IpfsImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  hash: string
  gateway?: string
}

export const ImageIPFS = ({ hash, gateway, ...props }: IpfsImageProps): JSX.Element => {
  return <img src={getIpfsURL(gateway, hash)} className="w-40 h-40 border border-black" {...props} />
}
