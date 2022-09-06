import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';

import { NEUTRAL_SHADES } from '../../../../utils/ui/colors';
import { NoImageContainer } from './noImage.styles';

const NoImage = () => {
  return (
    <NoImageContainer data-testid='no-image-container'>
      <ImageNotSupportedOutlinedIcon
        sx={{ fill: NEUTRAL_SHADES[900] }}
        fontSize='large'
        data-testid='no-image-icon'
      />
    </NoImageContainer>
  );
};

export default NoImage;
