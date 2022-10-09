import styled, { css } from 'styled-components';

import { SECONDARY_SHADES } from '../../../utils/ui/colors';
import { StyledCard } from '../cards.styles';
import { FlexColumn, FlexRow } from '../../../globalStyles';

export const Card = styled(StyledCard)`
  // width: 100%;
  // padding: 6.07% 4.5%;
  width: 19.69vw;
  height: 19.69vw;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled(FlexColumn)`
  // margin-left: 1.6%;
  margin: 24px;
`;

export const CardTitle = styled.h5`
  font-size: clamp(20px, 1.25vw, 24px);
  color: ${SECONDARY_SHADES[500]};
  margin-bottom: 6px;
`;

export const Underline = styled.div`
  width: 20px;
  height: 3px;
  border-radius: 10px;
  background: ${SECONDARY_SHADES[400]};
`;

export const CardBody = styled(FlexRow)<{
  justifyContent: string;
  alignItems: string;
}>`
  ${({ justifyContent, alignItems }) => css`
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `}
`;
