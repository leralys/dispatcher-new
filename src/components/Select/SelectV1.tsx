import React, { useCallback } from 'react';
// import {
//   FormControl,
//   FormHelperText,
//   Select as MuiSelect,
//   MenuItem,
//   SxProps,
//   Theme,
//   SelectChangeEvent
// } from '@mui/material';

// import useSelect from './useSelect';
// import { iconTypes } from '../Icon/Icon';
// import Typography from '../Typography/Typography';
// import { selectStyles, typeSelectStyles, menuStyles, selectedValueStyles } from './styles';

// export type SelectItem = {
//   value: string | number | boolean;
//   name: string;
// };

// export interface ISelectProps {
//   type: 'whiteBg' | 'grayBg';
//   name: string;
//   placeholder?: string;
//   icon?: iconTypes;
//   className?: string;
//   items: SelectItem[];
//   showError?: boolean;
//   errorText?: string;
//   disabled?: boolean;
//   helperText?: boolean;
//   formSx?: SxProps<Theme>;
//   onChange?: (event: SelectChangeEvent<string>) => void;
// }

// const Select: React.FC<ISelectProps> = ({
//   name,
//   items,
//   placeholder = 'Select',
//   icon,
//   type = 'whiteBg',
//   className,
//   showError,
//   errorText,
//   disabled,
//   formSx,
//   helperText = false,
//   //eslint-disable-next-line @typescript-eslint/no-empty-function
//   onChange = () => {}
// }) => {
//   const { handleChange, renderValueHandler, val } = useSelect(disabled, icon, placeholder);

//   const onSelectChange = useCallback(
//     (e: SelectChangeEvent<string>) => {
//       onChange(e);
//       handleChange(e);
//     },
//     [onChange, handleChange]
//   );

//   return (
//     <FormControl sx={formSx} className={className}>
//       <MuiSelect
//         data-testid="select"
//         id={name}
//         name={name}
//         disabled={disabled}
//         sx={{
//           width: 'unset !important',
//           ...selectStyles,
//           ...typeSelectStyles[type],
//           ...(val && selectedValueStyles)
//         }}
//         displayEmpty
//         fullWidth
//         value={val}
//         renderValue={() => renderValueHandler()}
//         onChange={onSelectChange}
//         MenuProps={{
//           PaperProps: { sx: menuStyles }
//         }}
//       >
//         {items?.map((item: SelectItem) => {
//           return (
//             <MenuItem sx={{ py: '.5rem' }} key={item.name} value={item.name.toString()}>
//               <Typography>{item.name}</Typography>
//             </MenuItem>
//           );
//         })}
//       </MuiSelect>
//       {helperText && <FormHelperText error={showError}>{errorText}</FormHelperText>}
//     </FormControl>
//   );
// };

// export default Select;


// export type SelectOption = {
//   name: string;
//   id: string;
// };

{
  /* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */
}
