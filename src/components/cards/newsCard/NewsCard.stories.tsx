import { Story, Meta } from '@storybook/react';

import NewsCard, { Props } from './NewsCard';
import mockIl from '../../../mock/topHeadlinesIsrMock.json';
import mockUs from '../../../mock/topHeadlinesUsMock.json';
import { TEXT_DIR } from '../../../utils/helpers/isRTL/isRTL';

export default {
  title: 'Cards/NewsCard',
  component: NewsCard,
} as Meta;

const Template: Story<Props> = (args) => <NewsCard {...args} />;

export const RTLArticle = Template.bind({});
RTLArticle.args = {
  article: mockIl.articles[9],
  textDir: TEXT_DIR.RTL,
};

export const RTLArticleNoImage = Template.bind({});
RTLArticleNoImage.args = {
  article: mockIl.articles[0],
  textDir: TEXT_DIR.RTL,
};

export const LTRArticle = Template.bind({});
LTRArticle.args = {
  article: mockUs.articles[0],
  textDir: TEXT_DIR.LTR,
};
