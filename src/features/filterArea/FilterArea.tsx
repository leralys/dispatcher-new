import { ENDPOINTS, DateFilterType } from '../../utils/types/types';
import DesktopFilterArea from './components/desktop/DesktopFilterArea';

interface FilterAreaProps {
  endpoint: ENDPOINTS;
  isMobile?: boolean;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
  onFilterChange: (value: string, name: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const FilterArea = ({
  endpoint,
  isMobile = false,
  isSourcesDisabled,
  isCountryCategoryDisabled,
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
        />
      )}
    </>
  );
};

export default FilterArea;
