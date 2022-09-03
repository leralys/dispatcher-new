import { useMemo } from 'react';

import useWindowSize from '../../../utils/hooks/useWindowSize';
import Button from '../../button/MainButton';
import { ButtonVariants } from '../../button/button.consts';
import NoImage from './NoImage';
import { TEXT_DIR } from '../../../utils/helpers/isRTL';
import cropCardContent from '../../../utils/helpers/cropCardContent';
import { formatArticleDate } from '../../../utils/helpers/dateFormat';
import { IArticle } from '../../../utils/types/APITypes';
import { replacementChar } from '../../../utils/consts/consts';
import {
  CardPrimaryStyled,
  CardImgContainer,
  CardButtonContainer,
  Article,
  ArticleImg,
  ArticleDetailes,
  ArticleTitle,
  ArticleContent,
  ATagStyled,
} from './newsCard.styles';

export interface NewsCardProps {
  article: IArticle;
  textDir: TEXT_DIR;
}

const NewsCard = ({ article, textDir = TEXT_DIR.RTL }: NewsCardProps) => {
  const { width } = useWindowSize();
  const sourceString = article.author
    ? `${article.author}, ${article.source.name}`
    : `${article.source.name}`;
  return (
    <CardPrimaryStyled>
      <CardImgContainer>
        {article.urlToImage ? (
          <ArticleImg
            src={article.urlToImage}
            onError={(e: any) => {
              e.target.src = '';
            }}
          />
        ) : (
          <NoImage />
        )}
      </CardImgContainer>
      <Article isRTL={textDir === TEXT_DIR.RTL ? true : false}>
        <ArticleDetailes>
          {formatArticleDate(article.publishedAt)}
        </ArticleDetailes>
        <ArticleTitle dir={textDir}>{article.title}</ArticleTitle>
        <ArticleDetailes dir={textDir}>{sourceString}</ArticleDetailes>
        <ArticleContent dir={textDir}>
          {article.description && !article.description.includes(replacementChar)
            ? cropCardContent(article.description, width)
            : ''}
        </ArticleContent>
        <CardButtonContainer>
          <Button withEndIcon={true} btnVariant={ButtonVariants.PRIMARY}>
            <ATagStyled
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Navigate to dispatch
            </ATagStyled>
          </Button>
        </CardButtonContainer>
      </Article>
    </CardPrimaryStyled>
  );
};

export default NewsCard;
