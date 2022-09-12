import { Story, Meta } from '@storybook/react';
import Search, { SearchProps } from './Search';

const testEndComponent = (
  <div
    style={{
      width: 'fit-content',
      height: '50px',
      border: '1px solid green',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: '16px',
    }}
  >
    Top Headlines
  </div>
);

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

export const EndAdornmentComponent = Template.bind({});
EndAdornmentComponent.args = {
  endAdornmentComponent: testEndComponent,
};
