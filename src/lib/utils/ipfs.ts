const DEFAULT_GATEWAY = 'ipfs.io'

export const getIpfsURL = (gateway: string | undefined, hash: string): string => {
  if (gateway === undefined) {
    return `https://${DEFAULT_GATEWAY}/ipfs/${hash}`
  }
  return `https://${gateway}/ipfs/${hash}`
}
