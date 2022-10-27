import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { Option } from '../../utils/types/types';

interface Props {
  selectedOption: Option;
  onChange: (value: string, id: string) => void;
  id: string;
}

const useSelect = ({ id, selectedOption, onChange }: Props) => {
  const [localValue, setLocalValue] = useState<string>(
    selectedOption ? selectedOption.value : ''
  );
  const [renderedValue, setRenderedValue] = useState<string>(
    selectedOption ? selectedOption.label : ''
  );

  const handleChange = (e: SelectChangeEvent<string>, child: any) => {
    onChange(e.target.value, id);
    setLocalValue(e.target.value);
    setRenderedValue(child.props.children);
  };

  return {
    localValue,
    renderedValue,
    setLocalValue,
    setRenderedValue,
    handleChange,
  };
};

export default useSelect;
