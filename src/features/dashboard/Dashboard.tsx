import { useState, useCallback } from 'react';

import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import FilterArea from '../filterArea/FilterArea';
import { endpoints } from '../../utils/consts/filters';
import {
  ENDPOINTS,
  IFilterObject,
  DateFilterType,
} from '../../utils/types/types';
import { getEndpointEnum } from './utils';
import { NavBarContainer, LogoContainer, ContentContainer } from './styles';

const Dashboard = () => {
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
  const [isSourcesDisabled, setIsSourcesDisabled] = useState<boolean>(false);
  const [isCountryCategoryDisabled, setIsCountryCategoryDisabled] =
    useState<boolean>(false);

  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const apiFunc = (filterObject: IFilterObject) => {
    console.log(filterObject);
  };

  return (
    <>
      <NavBarContainer>
        <LogoContainer>
          <Logo onClick={handleLogoClick} />
        </LogoContainer>
        <Search
          isWithFilter={true}
          filterItems={endpoints}
          selectedOption={endpoints[0]}
          id='q'
          query={filterObject.q}
          onEndpointChange={handleEndpointChange}
          onQueryChange={handleFilterChange}
        />
      </NavBarContainer>
      <ContentContainer>
        <FilterArea
          endpoint={selectedEndpoint}
          onFilterChange={handleFilterChange}
          onDateFilterChange={handleDateFilterChange}
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
        />
      </ContentContainer>
    </>
  );
};

export default Dashboard;
