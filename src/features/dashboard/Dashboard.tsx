import { useCallback } from 'react';

import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import { endpoints } from '../../utils/consts/filters';
import { ENDPOINTS } from '../../utils/types/types';
import DesktopTopHeadlinesFilters from '../filterArea/components/DesktopTopHeadlinesFilters';
import DesktopEverythingFilters from '../filterArea/components/DesktopEverythingFilters';
import { NavBarContainer, LogoContainer, ContentContainer } from './styles';
import { FiltersDesktopContainer } from '../filterArea/styles';
import useFilters from '../filterArea/hooks/useFilters';

const Dashboard = () => {
  const {
    filterObject,
    dateObject,
    isSourcesDisabled,
    isCountryCategoryDisabled,
    selectedEndpoint,
    setDateObject: handleDateObjectChange,
    handleFilterChange,
    handleDateFilterChange,
    handleEndpointChange,
  } = useFilters();

  const isMobile = false;

  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderDesktopFilters = () => (
    <FiltersDesktopContainer>
      {selectedEndpoint === ENDPOINTS.TOP_HEADLINES ? (
        <DesktopTopHeadlinesFilters
          isSourcesDisabled={isSourcesDisabled}
          isCountryCategoryDisabled={isCountryCategoryDisabled}
          onFilterChange={handleFilterChange}
          sources={[]}
        />
      ) : (
        <DesktopEverythingFilters
          filterObject={filterObject}
          dateObject={dateObject}
          handleDateObjectChange={handleDateObjectChange}
          onFilterChange={handleFilterChange}
          onDateFilterChange={handleDateFilterChange}
          sources={[]}
        />
      )}
    </FiltersDesktopContainer>
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
          onEndpointChange={handleEndpointChange}
          onQueryChange={handleFilterChange}
        />
      </NavBarContainer>
      <ContentContainer>
        {isMobile ? <div>Mobile</div> : renderDesktopFilters()}
      </ContentContainer>
    </>
  );
};

export default Dashboard;
