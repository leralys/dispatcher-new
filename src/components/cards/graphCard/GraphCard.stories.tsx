import { Story, Meta } from '@storybook/react';
import GraphCard, { GraphCardProps } from './GraphCard';

export default {
  title: 'Cards/GraphCard',
  component: GraphCard,
} as Meta;

const Template: Story<GraphCardProps> = (args) => <GraphCard {...args} />;

export const GraphCardDates = Template.bind({});
GraphCardDates.args = {
  title: 'Dates',
};

export const GraphCardSources = Template.bind({});
GraphCardSources.args = {
  title: 'Sources',
};
