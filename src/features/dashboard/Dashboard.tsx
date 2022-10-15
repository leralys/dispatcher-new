import { useState, useCallback } from 'react';

import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import FilterArea from '../filterArea/FilterArea';
import { endpoints } from '../../utils/consts/filters';
import { ENDPOINTS } from '../../utils/types/types';
import { getEndpointEnum } from './utils';
import { NavBarContainer, ContentContainer } from './dashboard.styles';

const Dashboard = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ENDPOINTS>(
    getEndpointEnum(endpoints[0].value)
  );
  const [filterObject, setFilterObject] = useState<any>();

  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEndpointChange = useCallback((value: string) => {
    setSelectedEndpoint(getEndpointEnum(value));
  }, []);

  const handleFilterChange = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <>
      <NavBarContainer>
        <Logo onClick={handleLogoClick} />
        <Search
          isWithFilter={true}
          filterItems={endpoints}
          selectedFilter={endpoints[0]}
          onEndpointChange={handleEndpointChange}
        />
      </NavBarContainer>
      <ContentContainer>
        <FilterArea endpoint={selectedEndpoint} onFilterChange={handleFilterChange} filterObject={filterObject}/>
      </ContentContainer>
    </>
  );
};

export default Dashboard;
