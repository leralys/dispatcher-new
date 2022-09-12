import {
  StyledFilterButton,
  FilterText,
  SxFilterIcon,
  TextAndAmount,
} from './filterButton.styles';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export interface FilterButtonProps {
  isOpen: boolean;
  filterTitle: string;
  selectedItem: string;
  selectedItemsAmount: number;
}

const DropdownButton = ({
  isOpen,
  filterTitle = 'Select',
  selectedItem = '',
  selectedItemsAmount = null,
}: FilterButtonProps) => {
  return (
    <StyledFilterButton>
      <TextAndAmount>
        <FilterText selectedItemsAmount={selectedItemsAmount}>
          {selectedItem ? selectedItem : filterTitle}
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
