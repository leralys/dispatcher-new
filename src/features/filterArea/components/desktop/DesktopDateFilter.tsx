import { useState, useRef, useCallback, SyntheticEvent } from 'react';
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
import {
  DateType,
  IDateObject,
  DateFilterType,
} from '../../../../utils/types/types';
import { SECONDARY_SHADES } from '../../../../utils/ui/colors';
import {
  DateDropdownContainer,
  DatepickerContainer,
  DropdownTitle,
  DropdownFooter,
} from './styles';
import { dateToISOFormat } from '../../utils';

interface DesktopDateFilterProps {
  updateFilter: (dates: DateFilterType) => void;
}

const DesktopDateFilter = ({ updateFilter }: DesktopDateFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [dateObject, setDateObject] = useState<IDateObject>({
    from: null,
    to: null,
  });
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const divRef = useRef();

  const handleClick = useCallback(() => {
    setAnchorEl(divRef.current);
  }, [setAnchorEl, divRef]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleDateChange = useCallback(
    (date: DateType, id: string) => {
      let newObj = dateObject;
      newObj[id as keyof typeof dateObject] = date;
      setDateObject(newObj);
      if (isNull(dateObject.from) && isNull(dateObject.to)) {
        setIsDisabledButton(true);
      } else setIsDisabledButton(false);
    },
    [dateObject]
  );

  const handleClear = (e: SyntheticEvent) => {
    e.stopPropagation();
    setDateObject({
      from: null,
      to: null,
    });
    updateFilter({ to: '', from: '' });
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
    updateFilter(newDateFilter);
    setIsFilterApplied(true);
    handleClose();
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
              <Button isIconBtn={true} onClick={handleClear}>
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
