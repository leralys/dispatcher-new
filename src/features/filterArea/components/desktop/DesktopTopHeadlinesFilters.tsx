import { useState, useCallback, useMemo } from 'react';
import { Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { useFilterStore } from '../../../../store/filterStore';
import Select from '../../../../components/Select/Select';
import { countries, categories } from '../../../../utils/consts/filters';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';

const DesktopTopHeadlinesFilters = () => {
  const [isSourcesDisabled, setIsSourcesDisabled] = useState<boolean>(false);
  const [isCountryCategoryDisabled, setIsCountryCategoryDisabled] =
    useState<boolean>(false);

  const { setFilter } = useFilterStore((state) => state);

  const isShowTooltip = useMemo(
    () => isSourcesDisabled || isCountryCategoryDisabled,
    [isSourcesDisabled, isCountryCategoryDisabled]
  );

  const shouldDisableFilter = useCallback((value: string, id: string) => {
    if (id === 'country' || id === 'category') {
      setIsSourcesDisabled(value ? true : false);
    }
    if (id === 'sources') {
      setIsCountryCategoryDisabled(value ? true : false);
    }
  }, []);

  const handleFilterChange = useCallback(
    (value: string, id: string) => {
      setFilter(value, id);
      shouldDisableFilter(value, id);
    },
    [setFilter, shouldDisableFilter]
  );

  return (
    <>
      <span>
        <Select
          placeholder='Country'
          items={countries}
          onChange={handleFilterChange}
          id='country'
          disabled={isCountryCategoryDisabled}
        />
      </span>
      <span>
        <Select
          placeholder='Category'
          items={categories}
          onChange={handleFilterChange}
          id='category'
          disabled={isCountryCategoryDisabled}
        />
      </span>
      <span>
        <Select
          placeholder='Sources'
          onChange={handleFilterChange}
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
