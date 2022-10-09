import { Story, Meta } from '@storybook/react';

import Datepicker from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
} as Meta;

const Template: Story = (args) => <Datepicker {...args} />;

export const Primary = Template.bind({});
