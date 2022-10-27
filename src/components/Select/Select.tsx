import { useMemo } from 'react';
import {
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  MenuItem,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { Option } from '../../utils/types/types';
import { cropMenuItem } from '../../utils/helpers/cropContent/cropContent';
import useSelect from './useSelect';
import {
  SxSelect,
  SxMenuStyles,
  SxHelperText,
  SxFormControl,
  SxMenuItem,
  EmptyValueEm,
} from './styles';

export interface Props extends Omit<MuiSelectProps, 'onChange'> {
  items?: Option[];
  id: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  helperText?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  customWidth?: number;
  customHeight?: number;
  isInSearch?: boolean;
  isWithEmptyValue?: boolean;
  selectedOption?: Option;
  onChange?: (value: string, id: string) => void;
}

const Select = ({
  id,
  placeholder = 'Select',
  className,
  items = [],
  isError = false,
  helperText,
  disabled = false,
  sx,
  // formSx,
  fullWidth = false,
  customWidth = 175,
  customHeight = 48,
  isInSearch = false,
  isWithEmptyValue = true,
  onChange,
  onOpen,
  onClose,
  selectedOption,
}: Props) => {
  const showhelperText = useMemo(() => Boolean(helperText), [helperText]);

  const { localValue, renderedValue, handleChange } = useSelect({
    id,
    selectedOption,
    onChange,
  });

  return (
    <FormControl
      sx={SxFormControl(fullWidth)}
      className={className}
      data-testid='select-form-control'
    >
      <MuiSelect
        data-testid='select'
        id={id}
        disabled={disabled}
        fullWidth={fullWidth}
        value={localValue}
        displayEmpty
        onChange={handleChange}
        IconComponent={ArrowBackIosRoundedIcon}
        renderValue={(val) => (val ? renderedValue : placeholder)}
        onOpen={onOpen}
        onClose={onClose}
        sx={SxSelect(
          sx,
          customWidth,
          customHeight,
          fullWidth,
          isError,
          disabled,
          isInSearch
        )}
        MenuProps={{
          PaperProps: { sx: SxMenuStyles(customWidth, isInSearch) },
        }}
      >
        {isWithEmptyValue && (
          <MenuItem value=''>
            <EmptyValueEm>None</EmptyValueEm>
          </MenuItem>
        )}
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value} sx={SxMenuItem}>
            {fullWidth ? item.label : cropMenuItem(item.label, customWidth)}
          </MenuItem>
        ))}
      </MuiSelect>
      {showhelperText && (
        <FormHelperText
          data-testid='select-helper-text'
          sx={SxHelperText(customWidth, isError)}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
