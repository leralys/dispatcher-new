import styled, { css } from 'styled-components';
import { SxProps, Theme } from '@mui/material';
import { purple } from '@mui/material/colors';

import { FlexRow, BORDER_RADIUS } from '../../globalStyles';
import {
  NEUTRAL_SHADES,
  MAIN_COLORS,
  SECONDARY_SHADES,
} from '../../utils/ui/colors';

export const StyledFilterButton = styled(FlexRow)<{ isInSearch: boolean }>`
  ${({ isInSearch }) => css`
    padding-inline: 16px;
    padding-right: ${isInSearch && '0px'};
    width: ${isInSearch ? '164px' : '176px'};
    background: ${NEUTRAL_SHADES.WHITE};
    align-items: center;
    justify-content: space-between;
    height: ${isInSearch ? '40px' : '48px'};
    border-radius: ${!isInSearch && BORDER_RADIUS[10]};
    border-left: ${isInSearch && `1px solid ${MAIN_COLORS.secondary}`};
    cursor: pointer;
  `}
`;

export const FilterText = styled.span<{ selectedItemsAmount: null | number }>`
  ${({ selectedItemsAmount }) => css`
    width: ${selectedItemsAmount ? '80px' : '104px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${SECONDARY_SHADES[400]};
    font-size: 14px;
  `}
`;

export const TextAndAmount = styled(FlexRow)`
  align-items: center;
`;

export const Amount = styled.span`
  color: ${purple[500]};
  font-weight: 500;
  font-size: 14px;
  margin-left: 4px;
  border-radius: ${BORDER_RADIUS[8]};
`;

export const SxFilterIcon = (isOpen: boolean): SxProps<Theme> => {
  return {
    transition: 'transform 0.3s ease-out',
    transform: `${isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'}`,
    fill: SECONDARY_SHADES[400],
  };
};
