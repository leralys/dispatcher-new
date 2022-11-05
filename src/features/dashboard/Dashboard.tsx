import { useCallback } from 'react';

import { useFilterStore } from '../../store/filterStore';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import FilterArea from '../filterArea/FilterArea';
import { endpoints } from '../../utils/consts/filters';
import { NavBarContainer, LogoContainer, ContentContainer } from './styles';

const Dashboard = () => {
  const { filterObject, setFilter, setEndpoint } = useFilterStore(
    (state) => state
  );

  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEndpointChange = useCallback(
    (value: string) => {
      setEndpoint(value);
    },
    [setEndpoint]
  );

  const handleQueryChange = useCallback(
    (value: string, id: string) => {
      setFilter(value, id);
    },
    [setFilter]
  );

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
          onFilterChange={handleEndpointChange}
          onQueryChange={handleQueryChange}
        />
      </NavBarContainer>
      <ContentContainer>
        <FilterArea />
      </ContentContainer>
    </>
  );
};

export default Dashboard;
