import { Story, Meta } from '@storybook/react';
import Select, { SelectProps } from './Select';
import { countries } from '../../features/filters/consts';

export default {
  title: 'components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <Select
    items={countries}
    {...args}
    onChange={(value: string) => console.log(value)}
  />
);
export const Primary = Template.bind({});
