import { Story, Meta } from '@storybook/react';

import MainButton, { Props, ButtonVariants } from './MainButton';

export default {
  title: 'Components/Button',
  component: MainButton,
} as Meta;

const Template: Story<Props> = (args) => <MainButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  children: 'Primary',
  withEndIcon: true,
  btnVariant: ButtonVariants.PRIMARY,
  onClick: () => {
    // empty function
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args,
  children: 'Secondary',
  withEndIcon: false,
  btnVariant: ButtonVariants.SECONDARY,
  onClick: () => {
    // empty function
  },
};

export const TextBtn = Template.bind({});
TextBtn.args = {
  ...Secondary.args,
  children: 'Text Button',
  withEndIcon: false,
  btnVariant: ButtonVariants.TEXT,
  onClick: () => {
    // empty function
  },
};
