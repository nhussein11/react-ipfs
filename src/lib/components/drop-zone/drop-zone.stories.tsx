import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { FileDropZone } from '.'

const meta: Meta = {
  title: 'FileDropZone',
  component: FileDropZone,
  argTypes: {
    ondrop: { action: 'dropped' },
    ondragover: { action: 'dragged over' },
  },
}

export default meta

const Template: StoryFn<typeof FileDropZone> = () => <FileDropZone />

export const Default = Template.bind({})

Default.args = {
  onchange: console.log,
}
