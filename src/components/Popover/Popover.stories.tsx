import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Popover, { Props } from './Popover';

export default {
  component: Popover,
  title: 'Components/Popover',
} as Meta;

// There is a problem with storybook popover position because it not render on the right root
  const Template: Story<Props> = (args) => {
  return <Popover {...args} />;
};

export const PopoverAnchor = styled.div`
  width: 100px;
  height: 50px;
  background-color: #aaa;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 400px;
  height: 400px;
  background-color: #aaa;
`;

export const Primary = Template.bind({});
Primary.args = {
  renderAnchor: <PopoverAnchor>Click Me</PopoverAnchor>,
  renderPopoverContent: <Body>Popover content </Body>,
};
