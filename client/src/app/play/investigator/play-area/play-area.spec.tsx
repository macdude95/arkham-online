import { render } from '@testing-library/react';

import PlayArea from './play-area';

describe('PlayArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayArea />);
    expect(baseElement).toBeTruthy();
  });
});
