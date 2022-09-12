import React from 'react';
// import { SelectChangeEvent } from '@mui/material';

// import Icon, { iconTypes } from '../Icon/Icon';
// import Typography from '../Typography/Typography';
// import { iconStyles } from './styles';
// import { NEUTRAL_SHADES } from '../../ui/utils/colors';

// const useSelect = (disabled: boolean, icon: iconTypes, placeholder: string) => {
//   const [val, setVal] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setVal(event.target.value);
//   };
//   const valueColor = val ? NEUTRAL_SHADES[1000] : NEUTRAL_SHADES[800];
//   const iconColor = disabled
//     ? NEUTRAL_SHADES[600]
//     : val
//     ? NEUTRAL_SHADES[700]
//     : NEUTRAL_SHADES[1000];

//   const renderIcon = () => {
//     return (
//       <Icon data-testid="icon" colorIcon={iconColor} component={icon} sx={iconStyles} size="md" />
//     );
//   };
//   const renderValueHandler = () => {
//     return (
//       <>
//         {icon && renderIcon()}
//         <Typography color={valueColor}>{val ? val : placeholder}</Typography>
//       </>
//     );
//   };

//   return { handleChange, renderValueHandler, val };
// };

// export default useSelect;
