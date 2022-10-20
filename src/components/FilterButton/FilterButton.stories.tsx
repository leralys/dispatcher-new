import { Story, Meta } from '@storybook/react';

import FilterButton, { Props } from './FilterButton';

export default {
  title: 'Components/FilterButton',
  component: FilterButton,
} as Meta;

const Template: Story<Props> = (args) => <FilterButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { isOpen: true, title: 'Category' };

export const Selected = Template.bind({});
Selected.args = {
  isOpen: true,
  title: 'Category',
  selectedItem: 'Entertainment',
};

export const SelectedMany = Template.bind({});
SelectedMany.args = {
  isOpen: true,
  title: 'Sources',
  selectedItem: 'ABC News Today',
  selectedItemsAmount: 10,
};
