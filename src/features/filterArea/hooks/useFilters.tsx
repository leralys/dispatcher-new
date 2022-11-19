import { useState, useCallback } from 'react';
import { isEmpty } from 'lodash';

import { endpoints } from '../../../utils/consts/filters';
import {
  ENDPOINTS,
  IFilterObject,
  IDateObject,
  DateFilterType,
} from '../../../utils/types/types';
import { getEndpointEnum } from '../../dashboard/utils';

const useFilters = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ENDPOINTS>(
    getEndpointEnum(endpoints[0].value)
  );
  const [filterObject, setFilterObject] = useState<IFilterObject>({
    country: '',
    endpoint: 'top-headlines',
    language: '',
    sortBy: '',
    category: '',
    sources: '',
    q: '',
    from: '',
    to: '',
  });
  const [dateObject, setDateObject] = useState<IDateObject>({
    from: isEmpty(filterObject.from) ? null : new Date(filterObject.from),
    to: isEmpty(filterObject.to) ? null : new Date(filterObject.to),
  });
  const [isSourcesDisabled, setIsSourcesDisabled] = useState<boolean>(false);
  const [isCountryCategoryDisabled, setIsCountryCategoryDisabled] =
    useState<boolean>(false);

  const apiFunc = (filterObject: IFilterObject) => {
    console.log(filterObject);
  };

  const handleEndpointChange = useCallback(
    (value: string) => {
      setSelectedEndpoint(getEndpointEnum(value));
      const query = filterObject.q;
      const newFilterObj = {
        country: '',
        endpoint: value,
        language: '',
        sortBy: '',
        category: '',
        sources: '',
        q: query,
        from: '',
        to: '',
      };
      setFilterObject(newFilterObj);
      setIsSourcesDisabled(false);
      setIsCountryCategoryDisabled(false);
      apiFunc(newFilterObj);
    },
    [filterObject.q]
  );

  const shouldDisableFilter = useCallback(
    (value: string, id: string) => {
      if (filterObject.endpoint === 'top-headlines') {
        if (id === 'country' || id === 'category') {
          setIsSourcesDisabled(value ? true : false);
        } else if (id === 'sources') {
          setIsCountryCategoryDisabled(value ? true : false);
        }
      }
    },
    [filterObject.endpoint]
  );

  const handleFilterChange = useCallback(
    (value: string, id: string) => {
      let newFilterObj = { ...filterObject };
      newFilterObj[id as keyof typeof filterObject] = value;
      setFilterObject(newFilterObj);
      apiFunc(newFilterObj);
      shouldDisableFilter(value, id);
    },
    [filterObject, shouldDisableFilter]
  );

  const handleDateFilterChange = useCallback(
    (dates: DateFilterType) => {
      let newFilterObj = { ...filterObject };
      Object.keys(dates).forEach((key) => {
        newFilterObj[key as keyof typeof newFilterObj] =
          dates[key as keyof typeof dates];
      });
      setFilterObject(newFilterObj);
      apiFunc(newFilterObj);
    },
    [filterObject]
  );

  return {
    filterObject,
    dateObject,
    isSourcesDisabled,
    isCountryCategoryDisabled,
    selectedEndpoint,
    setDateObject,
    handleFilterChange,
    handleDateFilterChange,
    handleEndpointChange,
  };
};

export default useFilters;
