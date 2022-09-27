import { Story, Meta } from '@storybook/react';

import SearchHistory from './SearchHistory';

export default {
  component: SearchHistory,
  title: 'Components/RecentSearches',
} as Meta;

const Template: Story = (args) => <SearchHistory {...args} />;

export const Primary = Template.bind({});
