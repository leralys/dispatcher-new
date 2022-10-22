import { SxProps, Theme } from '@mui/material';
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
    box-shadow: 0px 4px 12px ${BOX_SHADOW[200]};
    width: ${width}px;
    height: 132px;
    position: absolute;
    z-index: 6;
    margin-top: 6px;
    top: 62px;
    left: calc(16px + 11.5%);
    *::-webkit-scrollbar {
      width: 5px;
    }
    *::-webkit-scrollbar-track {
      margin-bottom: 8px;
      border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb {
      background: ${SECONDARY_SHADES[400]};
      border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb:hover {
      background: ${SECONDARY_SHADES[400]}90;
    }
  `}
`;

export const HistoryHeader = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  margin: 8px 2px -2px 20px;
`;
export const HistoryTitle = styled.span`
  text-transform: uppercase;
  color: ${SECONDARY_SHADES[400]};
  font-size: 12px;
  font-weight: 500;
  cursor: default;
`;

export const HistoryBody = styled(FlexColumn)`
  width: 100%;
  overflow: overlay;
  padding-bottom: 8px;
`;

export const HistoryItemContainer = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  padding-right: 10px;
  align-items: center;
  padding-inline: 18px;
  &:hover {
    background: ${SECONDARY_SHADES[300]}40;
  }
`;
export const HistoryItem = styled.span`
  display: flex;
  align-items: center;
  color: ${SECONDARY_SHADES[400]};
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  cursor: pointer;
  padding-block: 8px;
`;

export const SxRemoveIcon: SxProps<Theme> = {
  height: '20px',
  width: '20px',
  color: SECONDARY_SHADES[300],
};
