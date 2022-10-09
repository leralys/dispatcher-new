import { SECONDARY_SHADES, NEUTRAL_SHADES } from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const SxDatepickerInput = {
  color: SECONDARY_SHADES[400],
  cursor: 'pointer',
  fontSize: '14px',
  padding: '0px',
  '&::placeholder': {
    opacity: 1,
  },
};

export const SxDatepickerInputContainer = {
  borderRadius: BORDER_RADIUS[10],
  border: 'none',
  cursor: 'pointer',
  background: NEUTRAL_SHADES.WHITE,
  width: '175px',
  height: '48px',
  paddingInline: '16px',
};

export const SxCloseIcon = {
  color: SECONDARY_SHADES[300],
};
