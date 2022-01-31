import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '../button/Button';

export default {
  title: 'Crea-ui/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
    <div style={{marginTop: "100px", marginLeft: "100px"}}>
        <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
    </div>
);
export const Default = Template.bind({})
Default.args = { tooltip: "This is a button" }
