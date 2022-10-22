import { ReactNode } from 'react';
import { PopoverOrigin } from '@mui/material';

import { StyledPopover, Anchor } from './popover.styles';

export interface Props {
  renderAnchor: ReactNode;
  renderPopoverContent: ReactNode;
  width?: string;
  height?: string;
  divRef: React.Ref<HTMLDivElement>;
  anchorEl: Element;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  handleClick: () => void;
  handleClose: () => void;
}

const defaultAnchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
};

const defaultTransformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

const Popover = ({
  renderAnchor,
  renderPopoverContent,
  width,
  height,
  divRef,
  anchorEl,
  anchorOrigin = defaultAnchorOrigin,
  transformOrigin = defaultTransformOrigin,
  handleClick,
  handleClose,
}: Props) => {
  const open = !!anchorEl;

  return (
    <>
      <Anchor ref={divRef} onClick={handleClick} data-testid='popover-anchor'>
        {renderAnchor}
      </Anchor>
      <StyledPopover
        data-testid='popover'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        width={width}
        height={height}
      >
        {renderPopoverContent}
      </StyledPopover>
    </>
  );
};

export default Popover;
