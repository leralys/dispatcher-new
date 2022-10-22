import { render, screen } from '../../utils/testUtils';
import Popover from './Popover';

describe('Popover', () => {
  it('should render popover anchor', () => {
    render(
      <Popover
        renderAnchor={<div>Popover Anchor</div>}
        renderPopoverContent={<div>Popover Content</div>}
        divRef={null}
        anchorEl={null}
        handleClick={() => {}}
        handleClose={() => {}}
      />
    );
    const popoverAnchor = screen.getByTestId('popover-anchor');
    expect(popoverAnchor).toBeDefined();
  });
});
