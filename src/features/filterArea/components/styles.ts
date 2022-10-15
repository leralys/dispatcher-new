import styled from 'styled-components';

import { FlexRow } from '../../../globalStyles';
import { MAIN_COLORS } from '../../../utils/ui/colors';

export const FiltersDesktopContainer = styled(FlexRow)`
  width: 100%;
  border-bottom: 1px solid ${MAIN_COLORS.secondary};
  height: 88px;
  align-items: center;
  gap: 20px;
`;
