import { useState, useCallback } from 'react';
import { isEmpty } from 'lodash';

import { useFilterStore } from '../../../../store/filterStore';
import DesktopDateFilter from './DesktopDateFilter';
import Select from '../../../../components/Select/Select';
import { sortBy, languages } from '../../../../utils/consts/filters';
import { IDateObject } from '../../../../utils/types/types';

const DesktopEverythingFilters = () => {
  const { filterObject, setFilter } = useFilterStore((state) => state);

  const [dateObject, setDateObject] = useState<IDateObject>({
    from: isEmpty(filterObject.from) ? null : new Date(filterObject.from),
    to: isEmpty(filterObject.to) ? null : new Date(filterObject.to),
  });

  const handleFilterChange = useCallback(
    (value: string, id: string) => {
      setFilter(value, id);
    },
    [setFilter]
  );

  return (
    <>
      <span>
        <Select
          placeholder='Sort By'
          items={sortBy}
          onChange={handleFilterChange}
          id='sortBy'
        />
      </span>
      <span>
        <DesktopDateFilter
          dateObject={dateObject}
          onDateObjectChange={setDateObject}
        />
      </span>
      <span>
        <Select
          placeholder='Sources'
          onChange={handleFilterChange}
          id='sources'
        />
      </span>
      <span>
        <Select
          placeholder='Language'
          items={languages}
          onChange={handleFilterChange}
          id='language'
        />
      </span>
    </>
  );
};

export default DesktopEverythingFilters;
