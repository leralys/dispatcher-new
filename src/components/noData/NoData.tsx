import { NoDataEnum, noDataImgObj } from './utils';
import {
  NoDataContainer,
  NoDataImageDiv,
  NoDataImage,
  NoDataText,
} from './styles';

export interface Props {
  component: NoDataEnum;
}

const NoData = ({ component }: Props) => {
  return (
    <NoDataContainer>
      <NoDataImageDiv>
        <NoDataImage
          src={noDataImgObj[component].component}
          data-testid='no-data-img'
        />
      </NoDataImageDiv>
      <NoDataText data-testid='no-data-text'>
        {noDataImgObj[component].text}
      </NoDataText>
    </NoDataContainer>
  );
};

export default NoData;
