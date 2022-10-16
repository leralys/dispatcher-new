import { useState, useRef, useCallback } from 'react';
import { SvgIcon } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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

interface DesktopDateFilterProps {
  isDateSelected?: boolean;
}
const DesktopDateFilter = ({
  isDateSelected = false,
}: DesktopDateFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const divRef = useRef();

  const handleClick = useCallback(() => {
    setAnchorEl(divRef.current);
  }, [setAnchorEl, divRef]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

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
            <Datepicker isBorder={true} />
          </DatepickerContainer>
          <DatepickerContainer>
            <DropdownTitle>To</DropdownTitle>
            <Datepicker isBorder={true} />
          </DatepickerContainer>
          <DropdownFooter>
            <Button btnVariant={ButtonVariants.TEXT} disabled={!isDateSelected}>
              Clear
            </Button>
            <Button
              btnVariant={ButtonVariants.SECONDARY}
              disabled={!isDateSelected}
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
