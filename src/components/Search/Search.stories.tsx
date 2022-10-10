import { Story, Meta } from '@storybook/react';

import Search, { SearchProps } from './Search';
import { endpoints } from '../../utils/consts/filters';

export default {
  title: 'components/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;
export const InputExample = Template.bind({});

export const WithFilter = Template.bind({});
WithFilter.args = {
  isWithFilter: true,
  filterItems: endpoints,
};
