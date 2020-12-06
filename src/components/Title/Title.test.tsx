import { render } from '@testing-library/react';
import Title from './Title';

test('Render Title correctly', () => {
  const { getByTestId } = render(<Title title="Hello Test" />);
  expect(getByTestId(/title/i)).toBeTruthy();
});
