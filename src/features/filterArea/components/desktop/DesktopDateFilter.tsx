import { useState, useRef, useCallback, SyntheticEvent } from 'react';
import { SvgIcon } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { isNull, isEmpty } from 'lodash';

import { useFilterStore } from '../../../../store/filterStore';
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
} from '../../../../utils/types/types';
import {
  DateDropdownContainer,
  DatepickerContainer,
  DropdownTitle,
  DropdownFooter,
  SxClearIcon,
} from './styles';
import { dateToISOFormat } from '../../../../utils/helpers/dateFormat/dateFormat';

interface Props {
  dateObject: IDateObject;
  onDateObjectChange: (dateObj: IDateObject) => void;
}

const DesktopDateFilter = ({ dateObject, onDateObjectChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const divRef = useRef();

  const { filterObject, setDatesFilter } = useFilterStore((state) => state);

  const handleClick = useCallback(() => {
    setIsDisabledButton(true);
    setAnchorEl(divRef.current);
  }, [setAnchorEl, divRef]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    onDateObjectChange({
      from: isEmpty(filterObject.from) ? null : new Date(filterObject.from),
      to: isEmpty(filterObject.to) ? null : new Date(filterObject.to),
    });
  }, [setAnchorEl, filterObject, onDateObjectChange]);

  const handleDateChange = useCallback(
    (date: DateType, id: string) => {
      let newObj = { ...dateObject };
      newObj[id as keyof typeof dateObject] = date;
      onDateObjectChange(newObj);
      setIsDisabledButton(false);
    },
    [dateObject, onDateObjectChange]
  );

  const handleClear = () => {
    onDateObjectChange({
      from: null,
      to: null,
    });
    setDatesFilter({ to: '', from: '' });
    setIsFilterApplied(false);
    setIsDisabledButton(true);
  };

  const handleApply = () => {
    let newDates: DateFilterType = { to: '', from: '' };
    for (let key in dateObject) {
      if (isNull(dateObject[key as keyof typeof dateObject])) {
        continue;
      } else {
        newDates[key as keyof typeof newDates] = dateToISOFormat(
          dateObject[key as keyof typeof dateObject]
        );
      }
    }
    setDatesFilter(newDates);
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
                <CloseRoundedIcon sx={SxClearIcon} />
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
