import { Story, Meta } from '@storybook/react';
import Search, { SearchProps } from './Search';
import FilterButton from '../FilterButton/FilterButton';

export default {
  title: 'components/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => (
  <div style={{ width: '424px' }}>
    <Search {...args} />
  </div>
);
export const InputExample = Template.bind({});

export const WithFilter = Template.bind({});
WithFilter.args = {
  endAdornmentComponent: (
    <FilterButton isOpen={false} isInSearch={true} title='Top Headlines' />
  ),
};
