import { SyntheticEvent, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatepicker } from '@mui/x-date-pickers';
import { TextField, SvgIcon, InputAdornment } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Button from '../MainButton/MainButton';
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
}

const Datepicker = ({ isBorder = false }: DatepickerProps) => {
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
        disableMaskedInput
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
                  {selectedVal ? (
                    <Button isIconBtn={true} onClick={clearValue}>
                      <CloseRoundedIcon sx={SxCloseIcon} />
                    </Button>
                  ) : (
                    <SvgIcon component={CalendarIcon} inheritViewBox />
                  )}
                </InputAdornment>
              ),
              sx: SxDatepickerInputContainer(isBorder, Boolean(selectedVal)),
              disableUnderline: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default Datepicker;
