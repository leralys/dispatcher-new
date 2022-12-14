import { useMemo } from 'react';
import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Select from '../../../components/Select/Select';
import { Option } from '../../../utils/types/types';
import { countries, categories } from '../../../utils/consts/filters';
import { SECONDARY_SHADES } from '../../../utils/ui/colors';

interface Props {
  sources: Option[];
  isCountryCategoryDisabled: boolean;
  isSourcesDisabled: boolean;
  onFilterChange: (value: string, id: string) => void;
}

const DesktopTopHeadlinesFilters = ({
  sources,
  onFilterChange,
  isCountryCategoryDisabled,
  isSourcesDisabled,
}: Props) => {
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
          items={sources}
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
