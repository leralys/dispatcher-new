import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  MenuItem,
  SxProps,
  Theme,
  SelectChangeEvent,
} from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { cropMenuItem } from '../../utils/helpers/cropContent/cropContent';
import { SxButtonIcon, SxMenuStyles } from './select.styles';
import { NEUTRAL_SHADES } from '../../utils/ui/colors';

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  name: string;
  placeholder?: string;
  className?: string;
  items: Option[];
  isError?: boolean;
  helperText?: string;
  disabled?: boolean;
  formSx?: SxProps<Theme>;
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
  disabled,
  onChange,
  formSx,
  fullWidth = false,
  customWidth = 175,
  customHeight = 48,
}: SelectProps) => {
  const [value, setValue] = useState<string>('');
  const [renderedValue, setRenderedValue] = useState<string>('');

  const handleChange = (e: SelectChangeEvent<string>, child: any) => {
    onChange(e.target.value);
    setValue(e.target.value);
    setRenderedValue(child.props.children);
  };
  return (
    <FormControl sx={formSx} className={className}>
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
        sx={SxButtonIcon(customWidth, customHeight)}
        MenuProps={{
          PaperProps: { sx: SxMenuStyles(customWidth) },
        }}
      >
        <MenuItem value=''>
          <em
            style={{
              fontFamily: 'Mulish, Roboto, san-serif',
              fontSize: '14px',
              color: `${NEUTRAL_SHADES[600]}`,
            }}
          >
            None
          </em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {cropMenuItem(item.label, customWidth)}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText data-testid='select-helper-text'>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
