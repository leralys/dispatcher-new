import { SCREENS } from '../../ui/screenSizes';

const { breakpoint700 } = SCREENS;
export const ellipsis = ' ...';

export const cropCardContent = (content: string, width: number): string => {
  const maxArticleLengthMobile = 190;
  const maxArticleLengtDesktop = 145;
  const isMobile = width > breakpoint700 ? false : true;
  if (isMobile && content.length > maxArticleLengthMobile) {
    return content.slice(0, maxArticleLengthMobile) + ellipsis;
  } else if (!isMobile && content.length > maxArticleLengtDesktop) {
    return content.slice(0, maxArticleLengtDesktop) + ellipsis;
  } else return content;
};

export const cropMenuItem = (label: string, width: number): string => {
  const divisor = 8.5;
  const maxLength = Math.floor(width / divisor);
  if (label.length < width / divisor) return label;
  else return label.slice(0, maxLength) + '...';
};
