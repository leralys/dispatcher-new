import {
  useState,
  useRef,
  useCallback,
  SyntheticEvent,
} from 'react';
import { SvgIcon } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { isNull, isEmpty } from 'lodash';

import Popover from '../../../../components/Popover/Popover';
import FilterButton from '../../../../components/FilterButton/FilterButton';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import Button, {
  ButtonVariants,
} from '../../../../components/MainButton/MainButton';
import { ReactComponent as CalendarIcon } from '../../../../assets/svgs/calendar.svg';
import {
  DateType,
  DateFilterType,
  IDateObject,
  IFilterObject,
} from '../../../../utils/types/types';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';
import {
  DateDropdownContainer,
  DatepickerContainer,
  DropdownTitle,
  DropdownFooter,
} from './styles';
import { dateToISOFormat } from '../../../../utils/helpers/dateFormat/dateFormat';

interface Props {
  filterObject: IFilterObject;
  dateObject: IDateObject;
  setDateObject: (dateObj: IDateObject) => void;
  onDateFilterChange: (dates: DateFilterType) => void;
}

const DesktopDateFilter = ({
  filterObject,
  dateObject,
  setDateObject,
  onDateFilterChange,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const divRef = useRef();

  const handleClick = useCallback(() => {
    setAnchorEl(divRef.current);
  }, [setAnchorEl, divRef]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setDateObject({
      from: isEmpty(filterObject.from) ? null : new Date(filterObject.from),
      to: isEmpty(filterObject.to) ? null : new Date(filterObject.to),
    });
  }, [setAnchorEl, filterObject, setDateObject]);

  const handleDateChange = useCallback(
    (date: DateType, id: string) => {
      let newObj = { ...dateObject };
      newObj[id as keyof typeof dateObject] = date;
      setDateObject(newObj);
      setIsDisabledButton(false);
    },
    [dateObject, setDateObject]
  );

  const handleClear = () => {
    setDateObject({
      from: null,
      to: null,
    });
    onDateFilterChange({ to: '', from: '' });
    setIsFilterApplied(false);
    setIsDisabledButton(true);
  };

  const handleApply = () => {
    let newDateFilter: DateFilterType = { to: '', from: '' };
    for (let key in dateObject) {
      if (isNull(dateObject[key as keyof typeof dateObject])) {
        continue;
      } else {
        newDateFilter[key as keyof typeof newDateFilter] = dateToISOFormat(
          dateObject[key as keyof typeof dateObject]
        );
      }
    }
    onDateFilterChange(newDateFilter);
    setIsFilterApplied(
      isNull(dateObject.from) && isNull(dateObject.to) ? false : true
    );
    setAnchorEl(null);
  };

  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      renderAnchor={
        <FilterButton
          title='Dates'
          icon={
            isFilterApplied ? (
              <Button
                isIconBtn={true}
                onClick={(e: SyntheticEvent) => {
                  e.stopPropagation();
                  handleClear();
                }}
              >
                <CloseRoundedIcon sx={{ color: SECONDARY_SHADES[300] }} />
              </Button>
            ) : (
              <SvgIcon component={CalendarIcon} inheritViewBox />
            )
          }
        />
      }
      renderPopoverContent={
        <DateDropdownContainer>
          <DatepickerContainer>
            <DropdownTitle>From</DropdownTitle>
            <Datepicker
              isBorder={true}
              onDateChange={handleDateChange}
              id='from'
              value={dateObject.from}
            />
          </DatepickerContainer>
          <DatepickerContainer>
            <DropdownTitle>To</DropdownTitle>
            <span>
              <Datepicker
                isBorder={true}
                onDateChange={handleDateChange}
                id='to'
                value={dateObject.to}
              />
            </span>
          </DatepickerContainer>
          <DropdownFooter>
            <Button
              btnVariant={ButtonVariants.TEXT}
              disabled={isDisabledButton}
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button
              btnVariant={ButtonVariants.SECONDARY}
              disabled={isDisabledButton}
              onClick={handleApply}
            >
              Apply
            </Button>
          </DropdownFooter>
        </DateDropdownContainer>
      }
      handleClick={handleClick}
      handleClose={handleClose}
      divRef={divRef}
      anchorEl={anchorEl}
    />
  );
};

export default DesktopDateFilter;
