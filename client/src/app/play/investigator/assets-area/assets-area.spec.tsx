import { render } from '@testing-library/react';

import AssetsArea from './assets-area';

describe('AssetsArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssetsArea />);
    expect(baseElement).toBeTruthy();
  });
});
