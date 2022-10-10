import { NavBarContainer } from './dashboard.styles';

import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';

const Dashboard = () => {
  return (
    <NavBarContainer>
      <Logo />
      <Search />
    </NavBarContainer>
  );
};

export default Dashboard;
