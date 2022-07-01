import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Main } from './main';

describe('Main component', () => {
  it('should have a title', () => {
    const { container } = render(<Main />, {});
    expect(container).toBeDefined();
  });
});
