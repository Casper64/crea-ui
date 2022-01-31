import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RiMailSendLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'

import { Input } from './Input';

export default {
  title: 'Crea-ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>Click me</Input>
);
export const Default = Template.bind({})

Default.args = { type: "text", accent: "primary", placeholder: "Placeholder" }

export const Button = Template.bind({})

Button.args = { type: "text", accent: "primary", placeholder: "Placeholder", "button-icon": <RiMailSendLine/> }

export const Icon = Template.bind({})

Icon.args = { type: "text", accent: "primary", placeholder: "Placeholder", icon: <AiOutlineUser/> }