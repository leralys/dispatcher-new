import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../../components/Select/Select';
import { sortBy, languages } from '../../../../utils/consts/filters';
import { DateFilterType } from '../../../../utils/types/types';

interface DesktopEverythingFiltersProps {
  onFilterChange: (value: string, name: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopEverythingFilters = ({
  onFilterChange,
  onDateFilterChange,
}: DesktopEverythingFiltersProps) => {
  return (
    <>
      <span>
        <Select
          placeholder='Sort By'
          items={sortBy}
          onChange={onFilterChange}
          id='sortBy'
        />
      </span>
      <span>
        <DesktopDateFilter updateFilter={onDateFilterChange} />
      </span>
      <span>
        <Select placeholder='Sources' onChange={onFilterChange} id='sources' />
      </span>
      <span>
        <Select
          placeholder='Language'
          items={languages}
          onChange={onFilterChange}
          id='language'
        />
      </span>
    </>
  );
};

export default DesktopEverythingFilters;
