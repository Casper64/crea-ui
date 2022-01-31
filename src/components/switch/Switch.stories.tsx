import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './Switch';

export default {
  title: 'Crea-ui/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args}></Switch>
);
export const Default = Template.bind({})
Default.args = { color: "primary" }

export const WithText = Template.bind({})

WithText.args = { on: "On", off: "Off", color: "primary" }