import { render, screen } from '../../../utils/test-utils';
import mockIl from '../../../mock/topHeadlinesIsrMock.json';
import mockUs from '../../../mock/topHeadlinesUsMock.json';
import NewsCard from './NewsCard';
import { TEXT_DIR, isRTL } from '../../../utils/helpers/isRTL/isRTL';

const articleNoImg = mockIl.articles[0];
const textDirArticleNoImg = isRTL(mockIl.articles[0].title)
  ? TEXT_DIR.RTL
  : TEXT_DIR.LTR;

const articleRTL = mockIl.articles[1];
const textDirRTL = isRTL(mockIl.articles[1].title)
  ? TEXT_DIR.RTL
  : TEXT_DIR.LTR;

const articleLTR = mockUs.articles[0];
const textDirLTR = isRTL(mockUs.articles[0].title)
  ? TEXT_DIR.RTL
  : TEXT_DIR.LTR;

describe('Test News card', () => {
  test(`renders news card`, () => {
    render(<NewsCard article={articleNoImg} textDir={textDirArticleNoImg} />);
    const newsCard = screen.getByTestId('news-card');
    expect(newsCard).toBeDefined();
  });
  test(`renders noImage when urlToImg is null`, () => {
    render(<NewsCard article={articleNoImg} textDir={textDirArticleNoImg} />);
    const noImageContainer = screen.getByTestId('no-image-container');
    expect(noImageContainer).toBeDefined();
  });
  test(`renders image with src when urlToImg exists`, () => {
    render(<NewsCard article={articleRTL} textDir={textDirRTL} />);
    const articleImg = screen.getByTestId('article-img') as HTMLImageElement;
    expect(articleImg.src)
      .toContain(articleRTL.urlToImage)
      .toBe(
        'https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/759778'
      );
  });
  test('a tag has correct href, rel and target', () => {
    render(<NewsCard article={articleLTR} textDir={textDirLTR} />);
    const navigateToDispatch = screen.getByTestId(
      'navigate-to-dispatch'
    ) as HTMLAnchorElement;
    expect(navigateToDispatch.href)
      .toContain(articleLTR.url)
      .toBe(
        'https://www.cbssports.com/college-football/news/college-football-scores-schedule-ncaa-top-25-rankings-games-today-michigan-texas-a-m-in-action-early/live/'
      );
    expect(navigateToDispatch.rel).toBe('noopener noreferrer');
    expect(navigateToDispatch.target).toBe('_blank');
  });

  describe('Text direction of the article and title', () => {
    it('text-align of the article should be right when RTL text', () => {
      render(<NewsCard article={articleRTL} textDir={textDirRTL} />);
      const articleContainer = screen.getByTestId('article-container');
      expect(articleContainer).toHaveStyle('text-align: right');
    });
    it(`text dir of the LTR article's title should be ${TEXT_DIR.LTR}`, () => {
      render(<NewsCard article={articleLTR} textDir={textDirLTR} />);
      const articleTitle = screen.getByTestId(
        'article-title'
      ) as HTMLHeadingElement;
      expect(articleTitle.dir).toBe(TEXT_DIR.LTR);
    });
    it(`text dir of the RTL article's title should be ${TEXT_DIR.RTL}`, () => {
      render(<NewsCard article={articleRTL} textDir={textDirRTL} />);
      const articleTitle = screen.getByTestId(
        'article-title'
      ) as HTMLHeadingElement;
      expect(articleTitle.dir).toBe(TEXT_DIR.RTL);
    });
  });
});
