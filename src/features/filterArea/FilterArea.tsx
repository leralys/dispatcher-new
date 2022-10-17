import { ENDPOINTS, DateFilterType } from '../../utils/types/types';
import DesktopFilterArea from './components/desktop/DesktopFilterArea';

interface FilterAreaProps {
  endpoint: ENDPOINTS;
  isMobile?: boolean;
  onFilterChange: (value: string, name: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
}

const FilterArea = ({
  endpoint,
  isMobile = false,
  onFilterChange,
  onDateFilterChange,
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
          onDateFilterChange={onDateFilterChange}
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
        />
      )}
    </>
  );
};

export default FilterArea;
