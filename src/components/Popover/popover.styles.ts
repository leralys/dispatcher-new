import styled from 'styled-components';
import { Popover } from '@mui/material';

import { BORDER_RADIUS } from '../../globalStyles';
import { BOX_SHADOW } from '../../utils/ui/colors';

export const StyledPopover = styled(Popover)<{
  width?: string;
  height?: string;
}>`
  &&& .MuiPaper-root {
    width: ${({ width }) => width ?? 'fit-content'};
    height: ${({ height }) => height ?? 'fit-content'};
  }

  .MuiPaper-root {
    border-radius: ${BORDER_RADIUS[10]};
    font-size: 12px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    box-shadow: 0px 4px 12px ${BOX_SHADOW[200]};
    margin-top: 6px;
  }
`;

export const Anchor = styled.div``;
