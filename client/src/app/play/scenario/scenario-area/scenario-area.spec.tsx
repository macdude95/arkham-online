import { render } from '@testing-library/react';

import ScenarioArea from './scenario-area';

describe('ScenarioArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScenarioArea />);
    expect(baseElement).toBeTruthy();
  });
});
