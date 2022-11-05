import { ENDPOINTS } from '../../utils/types/types';

export const getEndpointEnum = (value: string) => {
  if (value === 'everything') return ENDPOINTS.EVERYTHING;
  if (value === 'top-headlines') return ENDPOINTS.TOP_HEADLINES;
};
