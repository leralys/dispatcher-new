import styled from 'styled-components';
import { FlexRow, BORDER_RADIUS } from '../../../../globalStyles';
import { NEUTRAL_SHADES } from '../../../../utils/ui/colors';
import { SCREENS } from '../../../../utils/ui/screenSizes';

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
