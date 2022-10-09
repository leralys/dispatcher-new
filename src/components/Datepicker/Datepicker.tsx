import { SyntheticEvent, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatepicker } from '@mui/x-date-pickers';
import { TextField, SvgIcon, InputAdornment } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { ReactComponent as CalendarIcon } from '../../assets/svgs/calendar.svg';
import {
  SxDatepickerInput,
  SxDatepickerInputContainer,
  SxCloseIcon,
} from './datepicker.styles';

const Datepicker = () => {
  const [selectedVal, setSelectedVal] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const clearValue = (e: SyntheticEvent) => {
    e.stopPropagation();
    setSelectedVal(null);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatepicker
        value={selectedVal}
        onChange={(newValue) => {
          setSelectedVal(newValue);
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        disableFuture
        components={{
          OpenPickerIcon: CalendarIcon,
        }}
        inputFormat='dd/MMM/yyyy'
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
                  {selectedVal ? (
                    <CloseRoundedIcon sx={SxCloseIcon} onClick={clearValue} />
                  ) : (
                    <SvgIcon component={CalendarIcon} inheritViewBox />
                  )}
                </InputAdornment>
              ),
              sx: SxDatepickerInputContainer,
              disableUnderline: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default Datepicker;
