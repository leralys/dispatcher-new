import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import { NEUTRAL_SHADES } from '../../../utils/ui/colors';

import { NoImageContainer } from './newsCard.styles';

const NoImage = () => {
  return (
    <NoImageContainer>
      <ImageNotSupportedOutlinedIcon
        sx={{ fill: NEUTRAL_SHADES[900] }}
        fontSize='large'
      />
    </NoImageContainer>
  );
};

export default NoImage;
