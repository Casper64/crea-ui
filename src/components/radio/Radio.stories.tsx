import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './Radio';

export default {
  title: 'Crea-ui/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => (
    <>
        <Radio name="test" {...args} value="r1">Radio 1</Radio>
        <Radio name="test" {...args} value="r2">Radio 2</Radio>
        <Radio name="test" {...args} value="r3">Radio 3</Radio>
    </>
);

export const Default = Template.bind({})

Default.args = { color: "primary" }