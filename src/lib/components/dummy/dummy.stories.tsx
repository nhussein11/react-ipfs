import React from 'react'
import { Dummy } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Dummy> = {
  title: 'Atoms/Button',
  component: Dummy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dummy> = () => <Dummy />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Dummy',
}
