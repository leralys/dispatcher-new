import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../components/Select/Select';
import { sortBy, languages } from '../../../utils/consts/filters';
import {
  DateFilterType,
  IFilterObject,
  IDateObject,
  Option,
} from '../../../utils/types/types';

interface Props {
  filterObject: IFilterObject;
  dateObject: IDateObject;
  sources: Option[];
  handleDateObjectChange: (dateObj: IDateObject) => void;
  onFilterChange: (value: string, id: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopEverythingFilters = ({
  filterObject,
  dateObject,
  sources,
  onFilterChange,
  onDateFilterChange,
  handleDateObjectChange,
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
          handleDateObjectChange={handleDateObjectChange}
          onDateFilterChange={onDateFilterChange}
        />
      </span>
      <span>
        <Select
          placeholder='Sources'
          onChange={onFilterChange}
          id='sources'
          items={sources}
        />
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
