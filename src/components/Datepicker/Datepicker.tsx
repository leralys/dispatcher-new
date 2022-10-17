import { SyntheticEvent, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatepicker } from '@mui/x-date-pickers';
import { TextField, SvgIcon, InputAdornment } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import subMonths from 'date-fns/subMonths';

import Button from '../MainButton/MainButton';
import { DateType } from '../../utils/types/types';
import { ReactComponent as CalendarIcon } from '../../assets/svgs/calendar.svg';
import {
  SxDatepickerInput,
  SxDatepickerInputContainer,
  SxCloseIcon,
  SxPaperProps,
  SxPopperProps,
} from './datepicker.styles';

interface DatepickerProps {
  isBorder?: boolean;
  onDateChange: (name: string, date: DateType) => void;
  name: string;
}

const Datepicker = ({ isBorder = false, onDateChange, name }: DatepickerProps) => {
  const [selectedDate, setSelectedDate] = useState<DateType>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const clearValue = (e: SyntheticEvent) => {
    e.stopPropagation();
    onDateChange(name, null);
    setSelectedDate(null);
  };

  const handleChange = (value: DateType) => {
    onDateChange(name, value);
    setSelectedDate(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatepicker
        value={selectedDate}
        onChange={(newValue) => handleChange(newValue)}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        disableFuture
        components={{
          OpenPickerIcon: CalendarIcon,
        }}
        inputFormat='dd/MMM/yyyy'
        disableMaskedInput
        minDate={subMonths(new Date(), 1)}
        views={['month', 'day']}
        PaperProps={{
          sx: SxPaperProps,
        }}
        PopperProps={{
          placement: 'bottom-start',
          sx: SxPopperProps,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='standard'
            onClick={toggleOpen}
            inputProps={{
              ...params.inputProps,
              placeholder: 'Date',
              readOnly: true,
              sx: SxDatepickerInput,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {selectedDate ? (
                    <Button isIconBtn={true} onClick={clearValue}>
                      <CloseRoundedIcon sx={SxCloseIcon} />
                    </Button>
                  ) : (
                    <SvgIcon component={CalendarIcon} inheritViewBox />
                  )}
                </InputAdornment>
              ),
              sx: SxDatepickerInputContainer(isBorder, Boolean(selectedDate)),
              disableUnderline: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default Datepicker;
