import { render } from '@testing-library/react';

import ThreatArea from './threat-area';

describe('ThreatArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThreatArea />);
    expect(baseElement).toBeTruthy();
  });
});
