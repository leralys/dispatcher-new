import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../../components/Select/Select';
import { sortBy, languages } from '../../../../utils/consts/filters';

interface DesktopEverythingFiltersProps {
  onFilterChange: (value: string, name: string) => void;
}

const DesktopEverythingFilters = ({
  onFilterChange,
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
        <DesktopDateFilter />
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
