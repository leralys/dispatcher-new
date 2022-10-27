import { Story, Meta } from '@storybook/react';

import SearchHistory, { Props } from './SearchHistory';

export default {
  component: SearchHistory,
  title: 'Components/SearchHistory',
} as Meta;

const Template: Story<Props> = (args) => <SearchHistory {...args} />;

export const Primary = Template.bind({
  customWidth: 664,
  searchList: ['test', 'search', 'soccer'],
  handleItemRemove: (index: number) => {
    console.log(index);
  },
});
