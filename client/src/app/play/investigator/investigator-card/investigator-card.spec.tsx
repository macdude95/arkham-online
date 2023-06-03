import { render } from '@testing-library/react';

import InvestigatorCard from './investigator-card';

describe('InvestigatorCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvestigatorCard />);
    expect(baseElement).toBeTruthy();
  });
});
