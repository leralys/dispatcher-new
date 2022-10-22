import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../../components/Select/Select';
import { sortBy, languages } from '../../../../utils/consts/filters';
import { DateFilterType } from '../../../../utils/types/types';

interface Props {
  onFilterChange: (value: string, name: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopEverythingFilters = ({
  onFilterChange,
  onDateFilterChange,
}: Props) => {
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
        <DesktopDateFilter onDateFilterChange={onDateFilterChange} />
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
