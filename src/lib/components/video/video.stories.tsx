import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { VideoIPFS, IpfsVideoProps } from '.'

const meta: Meta<typeof VideoIPFS> = {
  title: 'IpfsVideo',
  component: VideoIPFS,
  argTypes: {
    hash: {
      default: 'Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ',
    },
  },
}

export default meta

const Template: StoryFn<typeof VideoIPFS> = (args: IpfsVideoProps) => <VideoIPFS {...args} />

export const Video = Template.bind({})

Video.args = {
  hash: 'Qmc2oeTErghqoTB3N9j8te8QEfGRPTfTNH77aXARiMeuDJ',
}

export const SpecificGatewayVideo = Template.bind({})

SpecificGatewayVideo.args = {
  hash: '',
  gateway: '',
}
