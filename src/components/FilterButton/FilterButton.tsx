import {
  StyledFilterButton,
  FilterText,
  SxFilterIcon,
  TextAndAmount,
} from './filterButton.styles';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export interface FilterButtonProps {
  isOpen: boolean;
  title?: string;
  selectedItem?: string;
  selectedItemsAmount?: number;
  isInSearch: boolean;
}

const DropdownButton = ({
  isOpen,
  title = 'Select',
  selectedItem = '',
  selectedItemsAmount = null,
  isInSearch = false,
}: FilterButtonProps) => {
  return (
    <StyledFilterButton isInSearch={isInSearch}>
      <TextAndAmount>
        <FilterText selectedItemsAmount={selectedItemsAmount}>
          {selectedItem ? selectedItem : title}
        </FilterText>
        {selectedItemsAmount && <span> + {selectedItemsAmount}</span>}
      </TextAndAmount>
      <ArrowBackIosRoundedIcon sx={SxFilterIcon(isOpen)} />
    </StyledFilterButton>
  );
};

export default DropdownButton;

// <Button size="small" sx={sxButton(selectedItems.length > 0, filterTheme)}>
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
