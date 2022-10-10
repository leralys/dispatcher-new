import styled from 'styled-components';

import { SECONDARY_SHADES } from '../../utils/ui/colors';
import { FlexRow } from '../../globalStyles';

export const NavBarContainer = styled(FlexRow)`
  height: 74px;
  width: 100%;
  background: ${SECONDARY_SHADES[500]};
  align-items: center;
  gap: 152px;
  padding: 12px 20px;
  position: relative;
`;
