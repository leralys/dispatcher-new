import { useState, useRef, useCallback, ChangeEvent, useEffect } from 'react';
import {
  InputProps as MuiOutlinedInputProps,
  InputAdornment,
  SvgIcon,
  Fade,
} from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { debounce, isEmpty } from 'lodash';

import Select from '../Select/Select';
import SearchHistory from '../SearchHistory/SearchHistory';
import Button from '../../components/MainButton/MainButton';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { Option } from '../../utils/types/types';
import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import { getNewArray } from './utils';
import {
  StyledOutlinedInput,
  SxSearch,
  SearchContainer,
  IconButtonSpan,
  SxClearIcon,
} from './styles';
import { NEUTRAL_SHADES } from '../../utils/ui/colors';

export interface Props extends MuiOutlinedInputProps {
  placeholder?: string;
  isWithFilter?: boolean;
  customHeight?: number;
  customWidth?: number;
  customGrowWidth?: number;
  filterItems?: Option[];
  selectedFilter?: Option;
  id: string;
  onEndpointChange: (value: string) => void;
  onQueryChange: (value: string, id: string) => void;
}

const Search = ({
  placeholder = 'Search',
  isWithFilter,
  customHeight = 50,
  customWidth = 424,
  customGrowWidth = 664,
  filterItems = [],
  selectedFilter,
  id,
  onEndpointChange,
  onQueryChange,
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  // first arg is key to the value in local storage
  const [searches, setSearches] = useLocalStorage<string>('searches', '');
  const [searchList, setSearchList] = useState<string[]>(
    searches ? searches.split(',') : []
  );
  const ref = useRef<HTMLDivElement>(null);

  const handleSearch = async (value: string) => {
    if (value !== '') {
      const list = searchList;
      const newSearchList = getNewArray(value, list);
      setSearchList(newSearchList);
      setSearches(newSearchList.join());
      setShowHistory(true);
      onQueryChange(value, id);
    }
  };

  const handleItemClick = async (value: string) => {
    await handleSearch(value);
    setIsFocused(false);
    setShowHistory(false);
  };

  const debouncedReference = useRef(
    debounce(async (input) => {
      await handleSearch(input);
    }, 1000)
  ).current;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    if (!isEmpty(searchList)) {
      setShowHistory(true);
    }
  }, [searchList]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedReference(e.target.value);
  };

  const handleEnterKeyPress = async (e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter') {
      await handleSearch(value);
    }
  };

  const handleInputRemove = () => {
    const value = '';
    setSearchValue(value);
    onQueryChange(value, id);
  };

  const handleClickAway = () => {
    if (!isFilterOpen) {
      setIsFocused(false);
      setShowHistory(false);
    }
  };

  const handleSearchItemRemove = useCallback(
    (index: number) => {
      let newSearchList = searchList;
      newSearchList.splice(index, 1);
      setSearchList(newSearchList);
      setSearches(newSearchList.join());
    },
    [searchList, setSearches]
  );

  const handleClearHistory = useCallback(() => {
    setSearchList([]);
    setSearches('');
  }, [setSearches]);

  useEffect(() => {
    return () => {
      debouncedReference.cancel();
    };
  }, [debouncedReference]);

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
            placeholder={placeholder}
            fullWidth={true}
            sx={SxSearch()}
            onFocus={handleFocus}
            onKeyPress={(e) => handleEnterKeyPress(e, searchValue)}
            // transient props
            $customHeight={customHeight}
            $isWithFilter={isWithFilter}
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
              <InputAdornment position='end' data-testid='end-adornment'>
                {!!searchValue && (
                  <IconButtonSpan isWithFilter={isWithFilter}>
                    <Button isIconBtn={true} onClick={handleInputRemove}>
                      <CloseRoundedIcon sx={SxClearIcon} />
                    </Button>
                  </IconButtonSpan>
                )}
                {isWithFilter && (
                  <Select
                    id='endpoint'
                    items={filterItems}
                    isInSearch={true}
                    isWithEmptyValue={false}
                    selected={Boolean(selectedFilter) && selectedFilter}
                    onChange={onEndpointChange}
                    onOpen={() => setIsFilterOpen(true)}
                    onClose={() => setIsFilterOpen(false)}
                  />
                )}
              </InputAdornment>
            }
          />
        </SearchContainer>
      </ClickAwayListener>
      <Fade in={showHistory} timeout={{ exit: 200 }}>
        <SearchHistory
          customWidth={customGrowWidth}
          searchList={searchList}
          handleSearchItemRemove={handleSearchItemRemove}
          handleClearHistory={handleClearHistory}
          handleItemClick={handleItemClick}
          ref={ref}
        />
      </Fade>
    </>
  );
};

export default Search;
