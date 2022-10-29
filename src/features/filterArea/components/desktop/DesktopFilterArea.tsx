import { useState } from 'react';

import DesktopTopHeadlinesFilters from './DesktopTopHeadlinesFilters';
import DesktopEverythingFilters from './DesktopEverythingFilters';
import {
  ENDPOINTS,
  Option,
  DateFilterType,
  IDateObject,
} from '../../../../utils/types/types';
import { FiltersDesktopContainer } from './styles';
import { isEmpty } from 'lodash';

interface Props {
  endpoint: ENDPOINTS;
  sources?: Option[];
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
  filterObject: any;
  onFilterChange: (value: string, id: string) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopFilterArea = ({
  endpoint,
  isSourcesDisabled,
  isCountryCategoryDisabled,
  sources,
  filterObject,
  onFilterChange,
  onDateFilterChange,
}: Props) => {
  const [dateObject, setDateObject] = useState<IDateObject>({
    from: isEmpty(filterObject.from) ? null : new Date(filterObject.from),
    to: isEmpty(filterObject.to) ? null : new Date(filterObject.to),
  });
  return (
    <FiltersDesktopContainer>
      {endpoint === ENDPOINTS.TOP_HEADLINES ? (
        <DesktopTopHeadlinesFilters
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
          onFilterChange={onFilterChange}
          sources={sources}
        />
      ) : (
        <DesktopEverythingFilters
          filterObject={filterObject}
          dateObject={dateObject}
          setDateObject={setDateObject}
          onFilterChange={onFilterChange}
          onDateFilterChange={onDateFilterChange}
        />
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
