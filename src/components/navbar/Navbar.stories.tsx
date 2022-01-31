import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar, NavItem } from './Navbar';

export default {
  title: 'Crea-ui/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavItem>Home</NavItem>
    <NavItem>About</NavItem>
    <NavItem>Contact</NavItem>
  </Navbar>
);
export const Default = Template.bind({})

Default.args = { brand: "Home", shadow: true, "justify-items": 'right' }