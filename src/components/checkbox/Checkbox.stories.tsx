import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Crea-ui/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}></Checkbox>
);
export const Default = Template.bind({})
Default.args = { color: "primary" }

export const WithLabel = Template.bind({})

WithLabel.args = { children: "Checkbox Label", "label-position": "left", color: "primary" }