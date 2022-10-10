import styled from 'styled-components';

import { SECONDARY_SHADES } from '../../utils/ui/colors';

export const NavBarContainer = styled.div`
  height: 74px;
  width: 100%;
  background: ${SECONDARY_SHADES[500]};
  display: flex;
  align-items: center;
  gap: 152px;
  padding: 12px 20px;
  position: relative;
`;
