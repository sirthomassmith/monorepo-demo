import { render } from '@testing-library/react';

import SimpleLabel from './SimpleLabel';

describe('SimpleLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleLabel message="SimpleLabel"/>);
    expect(baseElement).toBeTruthy();
  });
});
