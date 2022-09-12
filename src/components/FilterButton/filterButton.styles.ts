import styled, { css } from 'styled-components';

import { FlexRow, BORDER_RADIUS } from '../../globalStyles';
import { NEUTRAL_SHADES } from '../../utils/ui/colors';

export const StyledFilterButton = styled(FlexRow)`
  padding-inline: 16px;
  width: 176px;
  background: ${NEUTRAL_SHADES.WHITE};
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-radius: ${BORDER_RADIUS[10]};
`;

export const FilterText = styled.span<{ selectedItemsAmount: null | number }>`
  ${({ selectedItemsAmount }) => css`
    width: ${selectedItemsAmount ? '80px' : '104px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const TextAndAmount = styled(FlexRow)`
  align-items: center;
`;

export const SxFilterIcon = (isOpen: boolean) => {
  return {
    transition: 'transform 0.3s ease-out',
    transform: `${isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'}`,
  };
};
