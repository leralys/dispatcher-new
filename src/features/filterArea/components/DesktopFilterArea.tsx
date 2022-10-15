import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';

import Select from '../../../components/Select/Select';
import Datepicker from '../../../components/Datepicker/Datepicker';
import { ENDPOINTS, Option } from '../../../utils/types/types';
import {
  countries,
  categories,
  sortBy,
  languages,
} from '../../../utils/consts/filters';
import { FiltersDesktopContainer } from './styles';
import { SECONDARY_SHADES } from '../../../utils/ui/colors';

interface DesktopFilterAreaProps {
  endpoint: ENDPOINTS;
  sources?: Option[];
  onFilterChange: (value: string) => void;
  // TODO type
  filterObject: any;
}

const DesktopFilterArea = ({
  endpoint,
  onFilterChange,
  filterObject
}: DesktopFilterAreaProps) => {
  return (
    <FiltersDesktopContainer>
      {endpoint === ENDPOINTS.TOP_HEADLINES ? (
        <>
          <span>
            <Select
              placeholder='Country'
              items={countries}
              onChange={onFilterChange}
            />
          </span>
          <span>
            <Select
              placeholder='Category'
              items={categories}
              onChange={onFilterChange}
            />
          </span>
          <span>
            <Select placeholder='Sources' onChange={onFilterChange} />
          </span>
          <span>
            <Tooltip
              title='Not possible to mix Sources filter with Country or Category filters'
              arrow={true}
            >
              <HelpOutlineIcon sx={{ color: SECONDARY_SHADES[400] }} />
            </Tooltip>
          </span>
        </>
      ) : (
        <>
          <span>
            <Select
              placeholder='Sort By'
              items={sortBy}
              onChange={onFilterChange}
            />
          </span>
          <span>
            <Datepicker />
          </span>
          <span>
            <Select placeholder='Sources' onChange={onFilterChange} />
          </span>
          <span>
            <Select
              placeholder='Language'
              items={languages}
              onChange={onFilterChange}
            />
          </span>
        </>
      )}
    </FiltersDesktopContainer>
  );
};

export default DesktopFilterArea;
