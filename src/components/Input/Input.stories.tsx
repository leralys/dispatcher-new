import { Story, Meta } from '@storybook/react';

import Input, { Props } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ width: '344px' }}>
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper Text',
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  helperText: 'Error Message',
};
