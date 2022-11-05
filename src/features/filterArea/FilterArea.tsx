import DesktopFilterArea from './components/desktop/DesktopFilterArea';

interface FilterAreaProps {
  isMobile?: boolean;
}

const FilterArea = ({ isMobile = false }: FilterAreaProps) => {
  return <>{isMobile ? <div>Mobile</div> : <DesktopFilterArea />}</>;
};

export default FilterArea;
