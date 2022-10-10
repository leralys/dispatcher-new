import { render, screen } from '../../../utils/testUtils';
import GraphCard from './GraphCard';

const flexProperties = [
  'flex-end',
  'flex-start',
  'space-between',
  'space-around',
  'space-evenly',
];

describe('Should render graph card', () => {
  it(`default flex properties (center)`, () => {
    render(<GraphCard />);
    const graphCardBody = screen.getByTestId('graph-card-body');
    expect(graphCardBody)
      .toBeDefined()
      .toHaveStyle('align-items: center; justify-content: center');
  });
  flexProperties.forEach((property) => {
    test(`align-items and justify-content equal to ${property}`, () => {
      render(<GraphCard alignItems={property} justifyContent={property} />);
      const graphCardBody = screen.getByTestId('graph-card-body');
      expect(graphCardBody)
        .toBeDefined()
        .toHaveStyle(`align-items: ${property}; justify-content: ${property}`);
    });
  });
});
