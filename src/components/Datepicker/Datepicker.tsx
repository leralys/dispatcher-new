import { SyntheticEvent, useEffect, useState } from 'react';
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
} from './styles';

interface Props {
  id: string;
  value?: DateType;
  isBorder?: boolean;
  isClearValue?: boolean;
  onDateChange: (date: DateType, id: string) => void;
}

const Datepicker = ({
  isBorder = false,
  onDateChange,
  id,
  value = null,
}: Props) => {
  const [localValue, setLocalValue] = useState<DateType>(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setLocalValue(value);
    onDateChange(value, id);
  }, [value, onDateChange, id]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const clearValue = (e: SyntheticEvent) => {
    e.stopPropagation();
    onDateChange(null, id);
    setLocalValue(null);
  };

  const handleChange = (value: DateType) => {
    setLocalValue(value);
    onDateChange(value, id);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatepicker
        value={localValue}
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
                  {localValue ? (
                    <Button isIconBtn={true} onClick={clearValue}>
                      <CloseRoundedIcon sx={SxCloseIcon} />
                    </Button>
                  ) : (
                    <SvgIcon component={CalendarIcon} inheritViewBox />
                  )}
                </InputAdornment>
              ),
              sx: SxDatepickerInputContainer(isBorder, Boolean(localValue)),
              disableUnderline: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default Datepicker;
