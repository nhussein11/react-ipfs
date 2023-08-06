import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ImageIPFS, IpfsImageProps } from '.'

const meta: Meta<typeof ImageIPFS> = {
  title: 'IpfsImage',
  component: ImageIPFS,
  argTypes: {
    hash: {
      default: '',
    },
    gateway: {
      default: '',
    },
    width: {
      default: 100,
    },
    height: {
      default: 100,
    },
    alt: {
      default: 'alt',
    },
    lazy: {
      default: false,
    },
  },
}

export default meta

const Template: StoryFn<typeof ImageIPFS> = (args: IpfsImageProps) => <ImageIPFS {...args} />

export const Image = Template.bind({})

Image.args = {
  hash: 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
}

export const SpecificGatewayImage = Template.bind({})

SpecificGatewayImage.args = {
  hash: 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
  gateway: 'gateway.moralisipfs.com',
}
