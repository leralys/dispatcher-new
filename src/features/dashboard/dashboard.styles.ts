import styled from 'styled-components';

import { SECONDARY_SHADES } from '../../utils/ui/colors';
import { FlexRow } from '../../globalStyles';

const navBarHeight = '74px';

export const NavBarContainer = styled(FlexRow)`
  height: ${navBarHeight};
  width: 100%;
  background: ${SECONDARY_SHADES[500]};
  align-items: center;
  padding: 12px 20px;
`;

export const LogoContainer = styled.div`
  width: 11.5%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background: ${SECONDARY_SHADES[100]};
  padding-inline: 12.5%;
  min-height: calc(100vh - ${navBarHeight});
`;
