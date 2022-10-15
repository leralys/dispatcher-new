import { Story, Meta } from '@storybook/react';
import Select, { SelectProps } from './Select';
import { countries } from '../../utils/consts/filters';
import { StringChain } from 'lodash';

export default {
  title: 'components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <div>
    <Select
      items={countries}
      name='example'
      {...args}
      onChange={(value: string, name: string) => console.log(value, name)}
    />
  </div>
);
export const Primary = Template.bind({});

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper Text',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  helperText: 'Error Message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  helperText: 'Disabled Error Text',
  isError: true,
};
