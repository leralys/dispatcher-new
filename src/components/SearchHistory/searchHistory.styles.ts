import styled, { css } from 'styled-components';

import { FlexRow, FlexColumn, BORDER_RADIUS } from '../../globalStyles';
import {
  BOX_SHADOW,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../utils/ui/colors';

export const HistoryContainer = styled(FlexColumn)<{ customWidth: number }>`
  ${({ customWidth: width }) => css`
    background: ${NEUTRAL_SHADES.WHITE};
    border-radius: ${BORDER_RADIUS[10]};
    padding: 8px 2px 16px 16px;
    box-shadow: 0px 4px 12px ${BOX_SHADOW[200]};
    width: ${width}px;
    height: 132px;
    position: absolute;
    z-index: 6;
    margin-top: 6px;
    // overflow: overlay;
    // font-size: 12px;
    // left: 12.6%;
    // top: 92%;
  `}
`;

export const HistoryHeader = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
`;
export const HistoryTitle = styled.span`
  text-transform: uppercase;
  color: ${SECONDARY_SHADES[400]};
  font-size: 14px;
  font-weight: 500;
  cursor: default;
`;
