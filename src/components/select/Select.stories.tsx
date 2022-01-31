import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Crea-ui/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} options={[
      {
          label: "Audi",
          value: {name: "Audi", id: 0}
      }, {
        label: "Audi1",
        value: {name: "Audi", id: 1}
    }, {
        label: "Audi2",
        value: {name: "Audi", id: 2}
    }, {
        label: "Audi3",
        value: {name: "Audi", id: 3}
    }, {
        label: "Audi4",
        value: {name: "Audi", id: 4}
    }, {
      label: "Audi5",
      value: {name: "Audi", id: 5}
  }, {
      label: "Audi6",
      value: {name: "Audi", id: 6}
  }, {
      label: "Audi7",
      value: {name: "Audi", id: 7}
  },
  ]}>
  </Select>
);
export const Default = Template.bind({})
Default.args = { accent: "primary" }

