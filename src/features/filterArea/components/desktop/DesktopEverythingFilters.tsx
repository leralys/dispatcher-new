import Datepicker from '../../../../components/Datepicker/Datepicker';
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
          name='sortBy'
        />
      </span>
      <span>
        <Datepicker />
      </span>
      <span>
        <Select
          placeholder='Sources'
          onChange={onFilterChange}
          name='sources'
        />
      </span>
      <span>
        <Select
          placeholder='Language'
          items={languages}
          onChange={onFilterChange}
          name='language'
        />
      </span>
    </>
  );
};

export default DesktopEverythingFilters;
