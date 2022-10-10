import { useCallback } from 'react';

import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import { endpoints } from '../../utils/consts/filters';
import { NavBarContainer } from './dashboard.styles';

const Dashboard = () => {
  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavBarContainer>
      <Logo onClick={handleLogoClick} />
      <Search
        isWithFilter={true}
        filterItems={endpoints}
        selectedFilter={endpoints[0]}
      />
    </NavBarContainer>
  );
};

export default Dashboard;
