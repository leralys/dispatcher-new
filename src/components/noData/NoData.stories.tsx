import { Story, Meta } from '@storybook/react';

import NoData, { Props } from './NoData';
import { NoDataEnum } from './utils';

export default {
  component: NoData,
  title: 'Components/NoData',
} as Meta;

const Template: Story<Props> = (args) => <NoData {...args} />;

export const Search = Template.bind({});
Search.args = {
  ...Search.args,
  component: NoDataEnum.SEARCH,
};

export const Chart = Template.bind({});
Chart.args = {
  ...Chart.args,
  component: NoDataEnum.CHART,
};
