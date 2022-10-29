import { useState, useRef, useCallback, ChangeEvent, useEffect } from 'react';
import {
  InputProps as MuiOutlinedInputProps,
  InputAdornment,
  SvgIcon,
} from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { debounce, isEmpty } from 'lodash';

import Select from '../Select/Select';
import SearchHistory from '../SearchHistory/SearchHistory';
import Button from '../../components/MainButton/MainButton';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { Option, IFilterObject } from '../../utils/types/types';
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
  selectedOption?: Option;
  id: string;
  query?: string;
  onEndpointChange: (value: string) => void;
  onQueryChange: (value: string, id: string) => void;
}

const Search = ({
  placeholder = 'Search',
  isWithFilter = false,
  customHeight = 50,
  customWidth = 424,
  customGrowWidth = 664,
  filterItems = [],
  selectedOption,
  id,
  query = '',
  onEndpointChange,
  onQueryChange,
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(query);
  // first arg is key to the value in local storage
  const [searches, setSearches] = useLocalStorage<string>('searches', '');
  const [searchList, setSearchList] = useState<string[]>(
    searches ? searches.split(',') : []
  );
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeHistoryDropdown = useCallback(() => {
    setIsFocused(false);
    setShowHistory(false);
  }, []);

  const handleSearch = (value: string) => {
    if (value !== '') {
      const list = [...searchList];
      const newSearchList = getNewArray(value, list);
      setSearchList(newSearchList);
      setSearches(newSearchList.join());
      onQueryChange(value, id);
    }
  };

  const handleItemClick = (value: string) => {
    setSearchValue(value);
    handleSearch(value);
    closeHistoryDropdown();
  };

  const debouncedReference = useRef(
    debounce(async (input) => {
      handleSearch(input);
    }, 1000)
  ).current;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    if (!isEmpty(searchList)) {
      setShowHistory(true);
    }
  }, [searchList]);

  const handleInputChange = (value: string) => {
    !showHistory && setShowHistory(true);
    setSearchValue(value);
    debouncedReference(value);
  };

  const handleEnterKeyPress = (keyboardKey: string, value: string) => {
    if (keyboardKey === 'Enter') {
      searchInputRef.current.blur();
      if (value !== query) {
        handleSearch(value);
      }
      closeHistoryDropdown();
    }
  };

  const handleClearInput = () => {
    setSearchValue('');
    onQueryChange('', id);
    searchInputRef.current.focus();
  };

  const handleClickAway = () => {
    if (!isFilterOpen) {
      closeHistoryDropdown();
    }
    setSearchValue(query);
  };

  const handleSearchItemRemove = useCallback(
    (index: number) => {
      let newSearchList = [...searchList];
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
            inputRef={searchInputRef}
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.value)
            }
            data-testid='search'
            placeholder={placeholder}
            fullWidth={true}
            sx={SxSearch()}
            onFocus={handleFocus}
            onKeyPress={(e: React.KeyboardEvent) => {
              handleEnterKeyPress(e.key, searchValue);
            }}
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
                    <Button isIconBtn={true} onClick={handleClearInput}>
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
                    selectedOption={Boolean(selectedOption) && selectedOption}
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
      {showHistory && (
        <SearchHistory
          customWidth={customGrowWidth}
          searchList={searchList}
          handleItemRemove={handleSearchItemRemove}
          handleClearHistory={handleClearHistory}
          handleItemClick={handleItemClick}
        />
      )}
    </>
  );
};

export default Search;
