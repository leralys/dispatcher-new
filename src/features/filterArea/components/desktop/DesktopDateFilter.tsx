import { useState, useRef, useCallback, useEffect } from 'react';
import { SvgIcon } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { isNull } from 'lodash';

import Popover from '../../../../components/Popover/Popover';
import FilterButton from '../../../../components/FilterButton/FilterButton';
import Datepicker from '../../../../components/Datepicker/Datepicker';
import Button, {
  ButtonVariants,
} from '../../../../components/MainButton/MainButton';
import { ReactComponent as CalendarIcon } from '../../../../assets/svgs/calendar.svg';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';
import {
  DateDropdownContainer,
  DatepickerContainer,
  DropdownTitle,
  DropdownFooter,
} from './styles';
import { DateType } from '../../../../utils/types/types';

export interface ISelectedDates {
  [key: string]: DateType;
  from: DateType;
  to: DateType;
}

interface DesktopDateFilterProps {
  isDateSelected?: boolean;
}
const DesktopDateFilter = ({
  isDateSelected = false,
}: DesktopDateFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [selectedDates, setSelectedDates] = useState<ISelectedDates>({
    from: null,
    to: null,
  });
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const divRef = useRef();

  const handleClick = useCallback(() => {
    setAnchorEl(divRef.current);
  }, [setAnchorEl, divRef]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleDateChange = useCallback(
    (name: string, date: DateType) => {
      let newObj = selectedDates;
      newObj[name] = date;
      setSelectedDates(newObj);
      if (isNull(selectedDates.from) && isNull(selectedDates.to)) {
        setIsDisabledButton(true);
      } else setIsDisabledButton(false);
    },
    [selectedDates]
  );

  const handleClear = () => {
    console.log('handleClear');
  };
  const handleApply = () => {
    console.log(selectedDates);
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
            isDateSelected ? (
              <CloseRoundedIcon sx={{ color: SECONDARY_SHADES[300] }} />
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
              name='from'
            />
          </DatepickerContainer>
          <DatepickerContainer>
            <DropdownTitle>To</DropdownTitle>
            <Datepicker
              isBorder={true}
              onDateChange={handleDateChange}
              name='to'
            />
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
