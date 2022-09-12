import useWindowSize from '../../../utils/hooks/useWindowSize';
import Button, { ButtonVariants } from '../../MainButton/MainButton';
import NoImage from './NoImage/NoImage';
import { TEXT_DIR } from '../../../utils/helpers/isRTL';
import cropCardContent from '../../../utils/helpers/cropCardContent';
import { formatArticleDate } from '../../../utils/helpers/dateFormat';
import { IArticle } from '../../../utils/types/APITypes';
import { replacementChar } from '../../../utils/consts/consts';
import {
  Card,
  CardImgContainer,
  CardButtonContainer,
  Article,
  ArticleImg,
  ArticleDetailes,
  ArticleTitle,
  ArticleContent,
  ATag,
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
    <Card data-testid='news-card'>
      <CardImgContainer>
        {article.urlToImage ? (
          <ArticleImg
            data-testid='article-img'
            src={article.urlToImage}
            onError={(e: any) => {
              e.target.src = '';
            }}
          />
        ) : (
          <NoImage />
        )}
      </CardImgContainer>
      <Article
        isRTL={textDir === TEXT_DIR.RTL ? true : false}
        data-testid='article-container'
      >
        <ArticleDetailes>
          {formatArticleDate(article.publishedAt)}
        </ArticleDetailes>
        <ArticleTitle dir={textDir} data-testid='article-title'>
          {article.title}
        </ArticleTitle>
        <ArticleDetailes dir={textDir}>{sourceString}</ArticleDetailes>
        <ArticleContent dir={textDir}>
          {article.description && !article.description.includes(replacementChar)
            ? cropCardContent(article.description, width)
            : ''}
        </ArticleContent>
        <CardButtonContainer>
          <Button withEndIcon={true} btnVariant={ButtonVariants.PRIMARY}>
            <ATag
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              data-testid='navigate-to-dispatch'
            >
              Navigate to dispatch
            </ATag>
          </Button>
        </CardButtonContainer>
      </Article>
    </Card>
  );
};

export default NewsCard;
