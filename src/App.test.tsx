import { render } from '@testing-library/react';
import App from './App';

test('Render App correctly', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
