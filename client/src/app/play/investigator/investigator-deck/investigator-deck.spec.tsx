import { render } from '@testing-library/react';

import InvestigatorDeck from './investigator-deck';

describe('InvestigatorDeck', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvestigatorDeck />);
    expect(baseElement).toBeTruthy();
  });
});
