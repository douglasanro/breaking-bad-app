import { render } from '@testing-library/react';
import Header from './Header';

test('Render Header correctly', () => {
  const { getByTestId } = render(<Header title="Hello Test" />);
  expect(getByTestId(/header/i)).toBeTruthy();
});
