import styled from 'styled-components';

import { SECONDARY_SHADES } from '../../utils/ui/colors';
import { SCREENS } from '../../utils/ui/screenSizes';
import { FlexColumn } from '../../globalStyles';

export const NoDataContainer = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  width: fit-content;

  // @media only screen and (max-width: ${SCREENS.laptopM}px) {
  //   margin-top: 3rem;
  // }
  // @media only screen and (max-width: ${SCREENS.mobileM}px) {
  //   margin-top: 6rem;
  // }
`;

export const NoDataImageDiv = styled.div`
  height: 136px;
  width: 136px;
  // @media only screen and (max-width: ${SCREENS.laptopM}px) {
  //   height: 32%;
  //   width: 32%;
  // }
`;

export const NoDataImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NoDataText = styled.p`
  font-size: 20px;
  color: ${SECONDARY_SHADES[400]};
  margin-top: 16px;
  text-align: center;
`;
