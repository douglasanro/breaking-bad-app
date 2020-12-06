import getCurrentAgeByDate from './getCurrentAgeByDate';

test('Get current age correctly', () => {
  const currentAge = getCurrentAgeByDate('12-01-1970')
  expect(currentAge).toBe('50 years');
});

test('Return Unknown with invalid date', () => {
  const currentAge = getCurrentAgeByDate('Invalid Date')
  expect(currentAge).toBe('Unknown');
});
