import Logo, { LogoProps } from './Logo';
import { Story, Meta } from '@storybook/react';

export default {
  component: Logo,
  title: 'Components/Logo',
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = {
  ...Main.args,
  onClick: () => {
    // empty function
  },
};

export const BigLogo = Template.bind({});
BigLogo.args = {
  ...BigLogo.args,
  customHeight: 80,
  onClick: () => {
    // empty function
  },
};

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  ...SmallLogo.args,
  customHeight: 30,
  onClick: () => {
    // empty function
  },
};
