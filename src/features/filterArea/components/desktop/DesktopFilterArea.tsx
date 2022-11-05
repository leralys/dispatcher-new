import { useFilterStore } from '../../../../store/filterStore';
import DesktopTopHeadlinesFilters from './DesktopTopHeadlinesFilters';
import DesktopEverythingFilters from './DesktopEverythingFilters';
import { ENDPOINTS } from '../../../../utils/types/types';
import { FiltersDesktopContainer } from './styles';
import { getEndpointEnum } from '../../../dashboard/utils';

const DesktopFilterArea = () => {
  const { filterObject } = useFilterStore((state) => state);
  return (
    <FiltersDesktopContainer>
      {getEndpointEnum(filterObject.endpoint) === ENDPOINTS.TOP_HEADLINES ? (
        <DesktopTopHeadlinesFilters />
      ) : (
        <DesktopEverythingFilters />
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
