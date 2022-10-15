import { ENDPOINTS } from '../../utils/types/types';

export const getEndpointEnum = (value: string) => {
  return value === 'everything'
    ? ENDPOINTS.EVERYTHING
    : ENDPOINTS.TOP_HEADLINES;
};
