import { isValidInn } from '../validators';

test('it should return true for valid inn', () => {
  const input = '4024007171909962';

  expect(isValidInn(input)).toBe(true);
});

test.each([
  ['true for valid organization Inn', '4024007171909962', true],
  ['false for invalid organization Inn', '4024007171909963', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValidInn(input)).toBe(expected);
});
