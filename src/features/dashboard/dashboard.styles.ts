import styled from 'styled-components';

import { SECONDARY_SHADES } from '../../utils/ui/colors';
import { FlexRow } from '../../globalStyles';

const navBarHeight = '74px';

export const NavBarContainer = styled(FlexRow)`
  height: ${navBarHeight};
  width: 100%;
  background: ${SECONDARY_SHADES[500]};
  align-items: center;
  gap: 152px;
  padding: 12px 20px;
  position: relative;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background: ${SECONDARY_SHADES[100]};
  padding-inline: 12.5%;
  min-height: calc(100vh - ${navBarHeight});
`;
