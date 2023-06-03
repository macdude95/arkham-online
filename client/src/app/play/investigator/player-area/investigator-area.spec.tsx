import { render } from '@testing-library/react';

import InvestigatorArea from './investigator-area';

describe('PlayerArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InvestigatorArea name='TestPlayerName' />);
    expect(baseElement).toBeTruthy();
  });
});
