import { render } from '@testing-library/react';

import InvestigatorTokenArea from './investigator-token-area';

describe('InvestigatorTokenArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvestigatorTokenArea />);
    expect(baseElement).toBeTruthy();
  });
});
