import { ENDPOINTS, FilterObject } from '../../utils/types/types';
import DesktopFilterArea from './components/desktop/DesktopFilterArea';

interface FilterAreaProps {
  endpoint: ENDPOINTS;
  isMobile?: boolean;
  onFilterChange: (value: string, name: string) => void;
  filterObject: FilterObject;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
}

const FilterArea = ({
  endpoint,
  isMobile = false,
  onFilterChange,
  filterObject,
  isSourcesDisabled,
  isCountryCategoryDisabled,
}: FilterAreaProps) => {
  return (
    <>
      {isMobile ? (
        <div>Mobile</div>
      ) : (
        <DesktopFilterArea
          endpoint={endpoint}
          onFilterChange={onFilterChange}
          filterObject={filterObject}
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
        />
      )}
    </>
  );
};

export default FilterArea;
