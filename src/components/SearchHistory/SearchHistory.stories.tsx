import { Story, Meta } from '@storybook/react';

import SearchHistory, { SearchHistoryProps } from './SearchHistory';

export default {
  component: SearchHistory,
  title: 'Components/RecentSearches',
} as Meta;

const Template: Story<SearchHistoryProps> = (args) => (
  <SearchHistory {...args} />
);

export const Primary = Template.bind({
  customWidth: 664,
});
