import { render } from '@testing-library/react';

import MarketData from './market-data';

describe('MarketData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MarketData />);
    expect(baseElement).toBeTruthy();
  });
});
