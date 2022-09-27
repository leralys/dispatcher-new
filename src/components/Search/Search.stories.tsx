import { Story, Meta } from '@storybook/react';
import Search, { SearchProps } from './Search';
import FilterButton from '../FilterButton/FilterButton';
import Select from '../Select/Select';
import { countries } from '../../features/filters/consts';

export default {
  title: 'components/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;
export const InputExample = Template.bind({});

export const WithFilter = Template.bind({});
WithFilter.args = {
  endAdornmentComponent: (
    <Select
      items={countries}
      isInSearch={true}
      placeholder='Top Headlines'
      onChange={(value: string) => console.log(value)}
    />
  ),
};
