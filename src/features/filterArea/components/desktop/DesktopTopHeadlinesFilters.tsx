import { useMemo } from 'react';
import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Select from '../../../../components/Select/Select';
import { Option } from '../../../../utils/types/types';
import { countries, categories } from '../../../../utils/consts/filters';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';

interface DesktopTopHeadlinesFiltersProps {
  sources?: Option[];
  onFilterChange: (value: string, name: string) => void;
  isCountryCategoryDisabled: boolean;
  isSourcesDisabled: boolean;
}

const DesktopTopHeadlinesFilters = ({
  sources,
  onFilterChange,
  isCountryCategoryDisabled,
  isSourcesDisabled,
}: DesktopTopHeadlinesFiltersProps) => {
  const isShowTooltip = useMemo(
    () => isSourcesDisabled || isCountryCategoryDisabled,
    [isSourcesDisabled, isCountryCategoryDisabled]
  );

  return (
    <>
      <span>
        <Select
          placeholder='Country'
          items={countries}
          onChange={onFilterChange}
          id='country'
          disabled={isCountryCategoryDisabled}
        />
      </span>
      <span>
        <Select
          placeholder='Category'
          items={categories}
          onChange={onFilterChange}
          id='category'
          disabled={isCountryCategoryDisabled}
        />
      </span>
      <span>
        <Select
          placeholder='Sources'
          onChange={onFilterChange}
          id='sources'
          disabled={isSourcesDisabled}
        />
      </span>
      {isShowTooltip && (
        <span>
          <Tooltip
            title='Not possible to mix Sources filter with Country or Category filters'
            arrow={true}
          >
            <HelpOutlineIcon sx={{ color: SECONDARY_SHADES[400] }} />
          </Tooltip>
        </span>
      )}
    </>
  );
};

export default DesktopTopHeadlinesFilters;
