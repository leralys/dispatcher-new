import { useState, useMemo } from 'react';
import {
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { cropMenuItem } from '../../utils/helpers/cropContent/cropContent';
import {
  SxButtonIcon,
  SxMenuStyles,
  emptyValueStyles,
  SxHelperText,
} from './select.styles';

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  name: string;
  placeholder?: string;
  className?: string;
  items: Option[];
  isError?: boolean;
  helperText?: string;
  disabled?: boolean;
  // formSx?: SxProps<Theme>;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  customWidth: number;
  customHeight: number;
}

const Select = ({
  name,
  placeholder = 'Select',
  className,
  items = [],
  isError = false,
  helperText,
  disabled = false,
  onChange,
  sx,
  // formSx,
  fullWidth = false,
  customWidth = 175,
  customHeight = 48,
}: SelectProps) => {
  const [value, setValue] = useState<string>('');
  const [renderedValue, setRenderedValue] = useState<string>('');

  const showhelperText = useMemo(() => Boolean(helperText), [helperText]);

  const handleChange = (e: SelectChangeEvent<string>, child: any) => {
    onChange(e.target.value);
    setValue(e.target.value);
    setRenderedValue(child.props.children);
  };
  return (
    <FormControl sx={{ width: fullWidth && '100%' }} className={className}>
      <MuiSelect
        data-testid='select'
        id={name}
        name={name}
        disabled={disabled}
        fullWidth={fullWidth}
        value={value}
        displayEmpty
        onChange={handleChange}
        IconComponent={ArrowBackIosRoundedIcon}
        renderValue={(value) => (value ? renderedValue : placeholder)}
        sx={SxButtonIcon(
          sx,
          customWidth,
          customHeight,
          fullWidth,
          isError,
          disabled
        )}
        MenuProps={{
          PaperProps: { sx: SxMenuStyles(customWidth) },
        }}
      >
        <MenuItem value=''>
          <em style={emptyValueStyles}>None</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
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
