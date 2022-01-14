import { getNavigation } from './management-state';

describe('managementState', () => {
  it('should work', () => {
    expect(getNavigation()).toBe(Array.isArray(getNavigation()));
  });
});
