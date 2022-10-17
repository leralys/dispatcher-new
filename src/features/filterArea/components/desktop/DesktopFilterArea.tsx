import DesktopTopHeadlinesFilters from './DesktopTopHeadlinesFilters';
import DesktopEverythingFilters from './DesktopEverythingFilters';
import {
  ENDPOINTS,
  Option,
  DateFilterType,
} from '../../../../utils/types/types';
import { FiltersDesktopContainer } from './styles';

interface DesktopFilterAreaProps {
  endpoint: ENDPOINTS;
  sources?: Option[];
  onFilterChange: (value: string, id: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
}

const DesktopFilterArea = ({
  endpoint,
  onFilterChange,
  onDateFilterChange,
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
        <DesktopEverythingFilters
          onFilterChange={onFilterChange}
          onDateFilterChange={onDateFilterChange}
        />
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
