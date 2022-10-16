import DesktopTopHeadlinesFilters from './DesktopTopHeadlinesFilters';
import DesktopEverythingFilters from './DesktopEverythingFilters';
import { ENDPOINTS, Option } from '../../../../utils/types/types';
import { FiltersDesktopContainer } from './styles';

interface DesktopFilterAreaProps {
  endpoint: ENDPOINTS;
  sources?: Option[];
  onFilterChange: (value: string, name: string) => void;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
}

const DesktopFilterArea = ({
  endpoint,
  onFilterChange,
  isSourcesDisabled,
  isCountryCategoryDisabled,
  sources,
}: DesktopFilterAreaProps) => {
  return (
    <FiltersDesktopContainer>
      {endpoint === ENDPOINTS.TOP_HEADLINES ? (
        <DesktopTopHeadlinesFilters
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
          onFilterChange={onFilterChange}
          sources={sources}
        />
      ) : (
        <DesktopEverythingFilters onFilterChange={onFilterChange} />
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
