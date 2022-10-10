import { Story, Meta } from '@storybook/react';

import SearchHistory, { SearchHistoryProps } from './SearchHistory';

export default {
  component: SearchHistory,
  title: 'Components/SearchHistory',
} as Meta;

const Template: Story<SearchHistoryProps> = (args) => (
  <SearchHistory {...args} />
);

export const Primary = Template.bind({
  customWidth: 664,
  searchList: ['test', 'search', 'soccer'],
  handleSearchItemRemove: (index: number) => {
    console.log(index);
  },
});
