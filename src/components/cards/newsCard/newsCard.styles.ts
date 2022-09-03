import styled from 'styled-components';

import {
  BOX_SHADOW_COLOR,
  MAIN_COLORS,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../../utils/ui/colors';
import { SCREENS } from '../../../utils/ui/screenSizes';
import { FlexColumn, FlexRow, BORDER_RADIUS } from '../../../globalStyles';
import { StyledCard } from '../card.styles';

export const CardPrimaryStyled = styled(StyledCard)`
  flex-direction: row;
  width: 100%;
  min-height: max(12.6vw, 240px);
  margin-bottom: 24px;
  box-shadow: 0px 32px 64px ${BOX_SHADOW_COLOR};

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    flex-direction: column;
    height: 448px;
  }
`;

export const CardImgContainer = styled.div`
  flex: 3;
  max-width: 288px;
  min-height: 100%;
  @media only screen and (max-width: ${SCREENS.desktop}px) {
    max-width: 240px;
  }

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    max-width: 100%;
    min-height: 40%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    max-width: 100%;
    min-height: 33%;
  }
`;

export const CardButtonContainer = styled(FlexRow)`
    max-height: 36px;
    justify-content: flex-end;

    .MuiButton-root.MuiButton-contained {

    @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
      width: 100%;
    }
`;

export const ATagStyled = styled.a`
  font-size: inherit;
  color: ${NEUTRAL_SHADES.WHITE};
  text-decoration: none;
  @media only screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

export const ArticleImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
  border-right: 1px solid ${MAIN_COLORS.secondary};

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
    object-position: 0% 50%;
  }
  @media only screen and (max-width: ${SCREENS.tabletM - 1}px) {
    border-bottom: 1px solid ${MAIN_COLORS.secondary};
  }
`;

export const Article = styled(FlexColumn)<{ isRTL: boolean }>`
  flex: 3;
  min-height: 100%;
  align-items: space-between;
  justify-content: space-between;
  padding: 16px;
  text-align: ${({ isRTL }) => isRTL && 'right'};

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    padding-block: 10px;
    min-height: 60%;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-block: 10px 16px;
    min-height: 66%;
  }
`;

export const ArticleDetailes = styled.p`
  color: ${SECONDARY_SHADES[300]};
  opacity: 0.5;
`;

export const ArticleTitle = styled.h6`
  color: ${SECONDARY_SHADES[400]};
  font-size: 18px;
`;

export const ArticleContent = styled.section`
  color: ${SECONDARY_SHADES[300]};
  font-size: 14px;
`;

export const NoImageContainer = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  background: ${NEUTRAL_SHADES[200]};
  width: 100%;
  height: 100%;
  border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
  }
`;
