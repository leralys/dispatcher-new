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

import { Option } from '../../utils/types/types';
import { cropMenuItem } from '../../utils/helpers/cropContent/cropContent';
import {
  SxSelect,
  SxMenuStyles,
  emptyValueStyles,
  SxHelperText,
  SxFormControl,
} from './styles';

export interface Props extends Omit<MuiSelectProps, 'onChange'> {
  items?: Option[];
  id: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  helperText?: string;
  disabled?: boolean;
  // formSx?: SxProps<Theme>;
  fullWidth?: boolean;
  customWidth?: number;
  customHeight?: number;
  isInSearch?: boolean;
  isWithEmptyValue?: boolean;
  selected?: Option;
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
  selected,
  value,
}: Props) => {
  const [localValue, setLocalValue] = useState<string>(
    selected ? selected.value : ''
  );
  const [renderedValue, setRenderedValue] = useState<string>(
    selected ? selected.label : ''
  );

  const showhelperText = useMemo(() => Boolean(helperText), [helperText]);

  const handleChange = (e: SelectChangeEvent<string>, child: any) => {
    onChange(e.target.value, id);
    setLocalValue(e.target.value);
    setRenderedValue(child.props.children);
  };
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
            <em style={emptyValueStyles}>None</em>
          </MenuItem>
        )}
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
