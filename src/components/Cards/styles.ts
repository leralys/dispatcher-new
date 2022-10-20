import styled from 'styled-components';

import { NEUTRAL_SHADES, MAIN_COLORS, BOX_SHADOW } from '../../utils/ui/colors';
import { BORDER_RADIUS, FlexRow } from '../../globalStyles';

export const StyledCard = styled(FlexRow)`
  border-radius: ${BORDER_RADIUS[20]};
  background-color: ${NEUTRAL_SHADES.WHITE};
  border: 1px solid ${MAIN_COLORS.secondary};
  box-shadow: 0px 32px 64px ${BOX_SHADOW[100]};
`;
