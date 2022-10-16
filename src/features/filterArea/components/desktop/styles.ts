import styled from 'styled-components';

import { FlexColumn, FlexRow } from '../../../../globalStyles';
import {
  MAIN_COLORS,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../../../utils/ui/colors';

export const FiltersDesktopContainer = styled(FlexRow)`
  width: 100%;
  border-bottom: 1px solid ${MAIN_COLORS.secondary};
  height: 88px;
  align-items: center;
  gap: 20px;
`;

export const DateDropdownContainer = styled(FlexColumn)`
  width: 208px;
  height: 240px;
  padding-block: 16px;
  background: ${NEUTRAL_SHADES.WHITE};
`;

export const DatepickerContainer = styled(FlexColumn)`
  gap: 8px;
  padding-inline: 16px;
  margin-bottom: 16px;
`;

export const DropdownTitle = styled.span`
  text-transform: uppercase;
  color: ${SECONDARY_SHADES[400]};
  font-size: 10px;
  font-weight: 500;
  cursor: default;
`;

export const DropdownFooter = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 0px;
  border-top: 1px solid ${MAIN_COLORS.secondary};
`;
