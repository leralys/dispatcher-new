import { SCREENS } from '../ui/screenSizes';
import {
  MAX_ARTICLE_LENGTH_MOBILE,
  MAX_ARTICLE_LENGTH_DESKTOP,
} from '../consts/maxValues';

const { breakpoint700 } = SCREENS;
export const ellipsis = ' ...';

const cropCardContent = (content: string, width: number): string => {
  const isMobile = width > breakpoint700 ? false : true;
  if (isMobile && content.length > MAX_ARTICLE_LENGTH_MOBILE) {
    return content.slice(0, MAX_ARTICLE_LENGTH_MOBILE) + ellipsis;
  } else if (!isMobile && content.length > MAX_ARTICLE_LENGTH_DESKTOP) {
    return content.slice(0, MAX_ARTICLE_LENGTH_DESKTOP) + ellipsis;
  } else return content;
};

export default cropCardContent;
