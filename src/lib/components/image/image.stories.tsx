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
  },
}

export default meta

const Template: StoryFn<typeof ImageIPFS> = (args: IpfsImageProps) => <ImageIPFS {...args} />

export const DefaultImage = Template.bind({})

DefaultImage.args = {
  hash: 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
}

export const SpecificGatewayImage = Template.bind({})

SpecificGatewayImage.args = {
  hash: 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
  gateway: 'gateway.moralisipfs.com',
}
