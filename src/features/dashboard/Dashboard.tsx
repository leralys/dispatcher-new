import { useState, useCallback, useEffect } from 'react';

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
import {
  NavBarContainer,
  LogoContainer,
  ContentContainer,
} from './dashboard.styles';

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

  const handleEndpointChange = useCallback((value: string) => {
    setSelectedEndpoint(getEndpointEnum(value));
    setFilterObject({
      country: '',
      endpoint: value,
      language: '',
      sortBy: '',
      category: '',
      sources: '',
      q: '',
      from: '',
      to: '',
    });
    setIsSourcesDisabled(false);
    setIsCountryCategoryDisabled(false);
  }, []);

  const shouldDisableFilter = (value: string, filter: string) => {
    if (filterObject.endpoint === 'top-headlines') {
      if (filter === 'country' || filter === 'category') {
        setIsSourcesDisabled(value ? true : false);
      } else if (filter === 'sources') {
        setIsCountryCategoryDisabled(value ? true : false);
      }
    }
  };

  const handleFilterChange = (value: string, id: string) => {
    let newFilterObj = filterObject;
    newFilterObj[id as keyof typeof filterObject] = value;
    setFilterObject(newFilterObj);
    apiFunc(newFilterObj);
    shouldDisableFilter(value, id);
  };

  const handleDateFilterChange = useCallback(
    (dates: DateFilterType) => {
      let newFilterObj = filterObject;
      newFilterObj.from = dates.from;
      newFilterObj.to = dates.to;
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
          selectedFilter={endpoints[0]}
          onEndpointChange={handleEndpointChange}
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
