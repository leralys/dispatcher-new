import { useCallback, useEffect, useRef, useState } from 'react';
// import { isEmpty, isFunction } from 'lodash';
// import Button from '../Buttons/Button/Button';
// import Checkbox from '../Checkbox/Checkbox';
// import Popover from '../Popover/Popover';
// import Input from '../Input/Input';
// import Icon, { iconTypes } from '../Icon/Icon';
// import Typography from '../Typography/Typography';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import {
//   Body,
//   ContainerTitle,
//   sxButton,
//   Container,
//   MenuItem,
//   ContainerIconAndTypography,
//   Header,
//   Footer,
//   sxInput,
//   IconStyle
// } from './styles';
// import { titleCase } from 'title-case';

// export type Option = {
//   value: string | number | boolean;
//   name: string;
// };
// export enum FilterTheme {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary'
// }
// export interface Props {
//   itemList: Option[];
//   onChange: (selectedItems: string[]) => void;
//   filterTheme?: FilterTheme;
//   filterTitle: string;
//   selectedItems: string[];
//   iconName?: iconTypes;
//   customRenderOption?: (name: Option['name']) => React.ReactNode;
// }

// const MultiSelect = ({
//   itemList,
//   iconName,
//   filterTitle,
//   filterTheme = FilterTheme.SECONDARY,
//   onChange,
//   selectedItems,
//   customRenderOption
// }: Props) => {
//   const divRef = useRef();
//   const [anchorEl, setAnchorEl] = useState<Element>();
//   const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(selectedItems);
//   const [localItemList, setLocalItemList] = useState<Option[]>(itemList);

//   useEffect(() => {
//     setLocalItemList(itemList);
//   }, [itemList]);

//   useEffect(() => {
//     setLocalSelectedItems(selectedItems);
//   }, [selectedItems]);

//   const handleClick = useCallback(() => {
//     setAnchorEl(divRef.current);
//   }, [setAnchorEl, divRef]);

//   const handleClose = useCallback(() => {
//     setAnchorEl(null);
//     setLocalItemList(itemList);
//   }, [setAnchorEl, itemList]);

//   const handleSelectRow = useCallback(
//     (value: string) => {
//       if (localSelectedItems.includes(value)) {
//         setLocalSelectedItems((state) => state.filter((itemValue) => itemValue !== value));
//       } else {
//         setLocalSelectedItems((state) => [...state, value]);
//       }
//     },
//     [localSelectedItems]
//   );

//   const handleApply = useCallback(() => {
//     onChange(localSelectedItems);
//     handleClose();
//   }, [onChange, localSelectedItems, handleClose]);

//   const handleSearch = useCallback(
//     (value: string) => {
//       if (isEmpty(value)) {
//         setLocalItemList(itemList);
//       } else {
//         const filteredItemList = localItemList.filter((item) =>
//           item.name.toLowerCase().includes(value.toLowerCase())
//         );
//         setLocalItemList(filteredItemList);
//       }
//     },
//     [localItemList, itemList]
//   );

//   const handleClear = useCallback(() => {
//     onChange([]);
//     setLocalSelectedItems([]);
//     setLocalItemList(itemList);
//     handleClose();
//   }, [handleClose, onChange, itemList]);

//   return (
//     <Popover
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left'
//       }}
//       renderAnchor={
//         <Button size="small" sx={sxButton(selectedItems.length > 0, filterTheme)}>
//           <ContainerTitle isSelected={selectedItems.length > 0} filterTheme={filterTheme}>
//             <ContainerIconAndTypography>
//               {iconName && <Icon sx={IconStyle} component={iconName} size="sm" />}
//               {selectedItems.length ? `${filterTitle} / ${selectedItems.length}` : `${filterTitle}`}
//             </ContainerIconAndTypography>
//             {anchorEl ? (
//               <ArrowDropUpIcon sx={{ fontSize: '20px' }} />
//             ) : (
//               <ArrowDropDownIcon sx={{ fontSize: '20px' }} />
//             )}
//           </ContainerTitle>
//         </Button>
//       }
//       renderPopoverContent={
//         <Container>
//           <Header>
//             <Input
//               placeholder="Search option"
//               sx={sxInput}
//               onChange={(e) => handleSearch(e.target.value)}
//             />
//           </Header>
//           <Body>
//             {localItemList.map((item, index) => (
//               <MenuItem
//                 key={index}
//                 onClick={() => {
//                   handleSelectRow(item.value as string);
//                 }}
//               >
//                 <Checkbox checked={localSelectedItems.includes(item.value as string)} />
//                 {isFunction(customRenderOption) ? (
//                   customRenderOption(item.name.toLowerCase())
//                 ) : (
//                   <Typography>{titleCase(item.name)}</Typography>
//                 )}
//               </MenuItem>
//             ))}
//           </Body>
//           <Footer>
//             <Button variant="text" buttonType="tertiary" size="small" onClick={handleClear}>
//               Clear
//             </Button>
//             <Button onClick={handleApply} size="small">
//               Apply
//             </Button>
//           </Footer>
//         </Container>
//       }
//       handleClick={handleClick}
//       handleClose={handleClose}
//       divRef={divRef}
//       anchorEl={anchorEl}
//     />
//   );
// };

// export default MultiSelect;
