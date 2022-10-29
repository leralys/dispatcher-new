import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../../components/Select/Select';
import { sortBy, languages } from '../../../../utils/consts/filters';
import {
  DateFilterType,
  IFilterObject,
  IDateObject,
} from '../../../../utils/types/types';

interface Props {
  filterObject: IFilterObject;
  dateObject: IDateObject;
  setDateObject: (dateObj: IDateObject) => void;
  onFilterChange: (value: string, name: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopEverythingFilters = ({
  onFilterChange,
  onDateFilterChange,
  filterObject,
  dateObject,
  setDateObject,
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
        <DesktopDateFilter
          dateObject={dateObject}
          filterObject={filterObject}
          setDateObject={setDateObject}
          onDateFilterChange={onDateFilterChange}
        />
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
