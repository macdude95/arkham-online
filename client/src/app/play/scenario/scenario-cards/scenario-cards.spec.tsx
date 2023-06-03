import { render } from '@testing-library/react';

import ScenarioCards from './scenario-cards';

describe('ScenarioCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScenarioCards />);
    expect(baseElement).toBeTruthy();
  });
});
