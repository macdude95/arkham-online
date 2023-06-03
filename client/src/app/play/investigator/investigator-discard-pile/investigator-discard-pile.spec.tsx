import { render } from '@testing-library/react';

import InvestigatorDiscardPile from './investigator-discard-pile';

describe('InvestigatorDiscardPile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvestigatorDiscardPile />);
    expect(baseElement).toBeTruthy();
  });
});
