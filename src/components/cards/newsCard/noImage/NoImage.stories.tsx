import { Story, Meta } from '@storybook/react';

import NoImage from './NoImage';

export default {
  component: NoImage,
  title: 'Cards/NoImagePic',
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: '250px', height: '250px' }}>
    <NoImage {...args} />
  </div>
);

export const Main = Template.bind({});
