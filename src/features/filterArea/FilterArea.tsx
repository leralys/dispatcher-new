import { ENDPOINTS } from '../../utils/types/types';
import DesktopFilterArea from './components/DesktopFilterArea';

interface FilterAreaProps {
  endpoint: ENDPOINTS;
  isMobile?: boolean;
  onFilterChange: (value: string) => void;
  // TODO type
  filterObject: any;
}

const FilterArea = ({
  endpoint,
  isMobile = false,
  onFilterChange,
  filterObject,
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
        />
      )}
    </>
  );
};

export default FilterArea;
