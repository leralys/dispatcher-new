import {
  ENDPOINTS,
  DateFilterType,
  IFilterObject,
} from '../../utils/types/types';
import DesktopFilterArea from './components/desktop/DesktopFilterArea';

interface FilterAreaProps {
  endpoint: ENDPOINTS;
  isMobile?: boolean;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
  filterObject: IFilterObject;
  onFilterChange: (value: string, id: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const FilterArea = ({
  endpoint,
  isMobile = false,
  isSourcesDisabled,
  isCountryCategoryDisabled,
  filterObject,
  onFilterChange,
  onDateFilterChange,
}: FilterAreaProps) => {
  return (
    <>
      {isMobile ? (
        <div>Mobile</div>
      ) : (
        <DesktopFilterArea
          endpoint={endpoint}
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
          onFilterChange={onFilterChange}
          onDateFilterChange={onDateFilterChange}
          filterObject={filterObject}
        />
      )}
    </>
  );
};

export default FilterArea;
