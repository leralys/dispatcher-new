import {
  useState,
  useRef,
  useCallback,
  ChangeEvent,
  useMemo,
  useEffect,
} from 'react';
import {
  InputProps as MuiOutlinedInputProps,
  InputAdornment,
  SvgIcon,
  Fade,
} from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import { debounce } from 'lodash';

import Select from '../Select/Select';
import SearchHistory from '../SearchHistory/SearchHistory';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { Option } from '../../utils/types/types';
import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import {
  StyledOutlinedInput,
  SxSearch,
  SearchContainer,
} from './search.styles';
import { NEUTRAL_SHADES } from '../../utils/ui/colors';

export interface SearchProps extends MuiOutlinedInputProps {
  placeholder?: string;
  isWithFilter?: boolean;
  customHeight?: number;
  customWidth?: number;
  customGrowWidth?: number;
  filterItems?: Option[];
  selectedFilter?: Option;
  onEndpointChange?: (value: string) => void;
}

const Search = ({
  placeholder = 'Search',
  isWithFilter,
  customHeight = 50,
  customWidth = 424,
  customGrowWidth = 664,
  filterItems = [],
  selectedFilter,
  onEndpointChange,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  // first arg is key to the value in local storage.
  const [searches, setSearches] = useLocalStorage<string>('searches', '');

  const ref = useRef<HTMLDivElement>(null);

  // TODO remove
  const test = useMemo(() => ['test', 'search', 'soccer', 'lorem ipsum'], []);

  // TODO move and change
  const someApiFunc = async (value: string) => {
    console.log(value);
  };

  const debouncedReference = useRef(
    debounce(async (input) => {
      await someApiFunc(input);
    }, 1000)
  ).current;

  useEffect(() => {
    return () => {
      debouncedReference.cancel();
    };
  }, [debouncedReference]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    // if (searches) {
    //   setSearchList(searches.split(','));
    //   setShowHistory(true);
    // }
    // TODO change
    setSearchList(test);
    setShowHistory(true);
  }, [test]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedReference(e.target.value);
  };

  const handleClickAway = () => {
    if (!isFilterOpen) {
      setIsFocused(false);
      setShowHistory(false);
    }
  };

  const handleItemSearch = useCallback((value: string) => {
    console.log(`search ${value}`);
  }, []);

  const handleSearchItemRemove = useCallback(
    (index: number) => {
      console.log(`remove ${test[index]}`);
    },
    [test]
  );
  const handleClearHistory = useCallback(() => {
    console.log('clear all');
  }, []);

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SearchContainer
          customWidth={isFocused ? customGrowWidth : customWidth}
          data-testid='search-container'
        >
          <StyledOutlinedInput
            value={searchValue}
            onChange={handleInputChange}
            data-testid='search'
            startAdornment={
              <InputAdornment position='start'>
                <SvgIcon
                  component={SearchIcon}
                  inheritViewBox
                  data-testid='search-icon'
                  sx={{ color: NEUTRAL_SHADES.WHITE }}
                />
              </InputAdornment>
            }
            endAdornment={
              isWithFilter && (
                <InputAdornment position='end' data-testid='end-adornment'>
                  <Select
                    items={filterItems}
                    isInSearch={true}
                    isWithEmptyValue={false}
                    selected={Boolean(selectedFilter) && selectedFilter}
                    onChange={onEndpointChange}
                    onOpen={() => setIsFilterOpen(true)}
                    onClose={() => setIsFilterOpen(false)}
                  />
                </InputAdornment>
              )
            }
            placeholder={placeholder}
            fullWidth={true}
            sx={SxSearch()}
            onFocus={handleFocus}
            // transient props
            $customHeight={customHeight}
            $isWithFilter={isWithFilter}
          />
        </SearchContainer>
      </ClickAwayListener>
      <Fade in={showHistory} timeout={{ exit: 200 }}>
        <SearchHistory
          customWidth={customGrowWidth}
          searchList={test}
          handleSearchItemRemove={handleSearchItemRemove}
          handleClearHistory={handleClearHistory}
          handleItemSearch={handleItemSearch}
          ref={ref}
        />
      </Fade>
    </>
  );
};

export default Search;
