import { Story, Meta } from '@storybook/react';
import InputComponent, { InputComponentProps } from './InputComponent';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
} as Meta;

const Template: Story<InputComponentProps> = (args) => (
  <InputComponent {...args} />
);

export const InputExample = Template.bind({});
