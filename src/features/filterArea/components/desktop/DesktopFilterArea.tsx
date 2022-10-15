import { useState, useEffect } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';

import Select from '../../../../components/Select/Select';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import { ENDPOINTS, Option, FilterObject } from '../../../../utils/types/types';
import {
  countries,
  categories,
  sortBy,
  languages,
} from '../../../../utils/consts/filters';
import { FiltersDesktopContainer } from './styles';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';

interface DesktopFilterAreaProps {
  endpoint: ENDPOINTS;
  sources?: Option[];
  onFilterChange: (value: string, name: string) => void;
  filterObject: FilterObject;
  isSourcesDisabled?: boolean;
  isCountryCategoryDisabled?: boolean;
}

const DesktopFilterArea = ({
  endpoint,
  onFilterChange,
  filterObject,
  isSourcesDisabled,
  isCountryCategoryDisabled,
}: DesktopFilterAreaProps) => {
  const [filterValue, setFilterValue] = useState<string>('');

  useEffect(() => {
    setFilterValue('');
  }, [endpoint]);

  return (
    <FiltersDesktopContainer>
      {endpoint === ENDPOINTS.TOP_HEADLINES ? (
        <>
          <span>
            <Select
              placeholder='Country'
              items={countries}
              onChange={onFilterChange}
              name='country'
              value={filterValue}
              disabled={isCountryCategoryDisabled}
            />
          </span>
          <span>
            <Select
              placeholder='Category'
              items={categories}
              onChange={onFilterChange}
              name='category'
              disabled={isCountryCategoryDisabled}
            />
          </span>
          <span>
            <Select
              placeholder='Sources'
              onChange={onFilterChange}
              name='sources'
              value={filterValue}
              disabled={isSourcesDisabled}
            />
          </span>
          <span>
            <Tooltip
              title='Not possible to mix Sources filter with Country or Category filters'
              arrow={true}
            >
              <HelpOutlineIcon sx={{ color: SECONDARY_SHADES[400] }} />
            </Tooltip>
          </span>
        </>
      ) : (
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
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
