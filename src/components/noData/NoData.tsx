import { noDataTypes, noDataImgObj } from './noData.consts';
import {
  NoDataContainer,
  NoDataImageDiv,
  NoDataImage,
  NoDataText,
} from './noData.styles';

export interface NoDataProps {
  component: noDataTypes;
}

const NoData = ({ component }: NoDataProps) => {
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
