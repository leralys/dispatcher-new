import styled from 'styled-components';

import { NEUTRAL_SHADES, MAIN_COLORS } from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const StyledCard = styled.div`
  display: flex;
  border-radius: ${BORDER_RADIUS};
  background-color: ${NEUTRAL_SHADES.WHITE};
  border: 1px solid ${MAIN_COLORS.secondary};
`;
