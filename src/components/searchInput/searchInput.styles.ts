import styled from 'styled-components';
import { Input } from '@mui/material';

import { ReactComponent as Icon } from '../../assets/svgs/searchIcon.svg';
import { SECONDARY_SHADES } from '../../utils/ui/colors';

export const InputStyled = styled(Input)`
  && {
    flex: 2;
    border: none;
    font-size: 14px;
    color: ${SECONDARY_SHADES[300]};
    height: 100%;
  }
`;

export const InputIcon = styled(Icon)`
  margin-right: 16px;
`;
