import { ordinal } from '../src';

const fixtures: [number, string][] = [
  [0, 'ıncı'],

  [1, 'inci'],
  [2, 'nci'],
  [3, 'üncü'],
  [4, 'üncü'],
  [5, 'inci'],
  [6, 'ncı'],
  [7, 'nci'],
  [8, 'inci'],
  [9, 'uncu'],

  [10, 'uncu'],
  [20, 'nci'],
  [30, 'uncu'],
  [40, 'ıncı'],
  [50, 'nci'],
  [60, 'ıncı'],
  [70, 'inci'],
  [80, 'inci'],
  [90, 'ıncı'],

  [100, 'üncü'],
  [10 ** 3, 'inci'],
  [10 ** 4, 'inci'],
  [10 ** 5, 'inci'],

  [10 ** 6, 'uncu'],
  [10 ** 7, 'uncu'],
  [10 ** 8, 'uncu'],

  [10 ** 9, 'ıncı'],
  [10 ** 10, 'ıncı'],
  [10 ** 11, 'ıncı'],

  [10 ** 12, 'uncu'],
  [10 ** 13, 'uncu'],
  [10 ** 14, 'uncu'],
];

describe('ordinal()', () => {
  describe('given "onlySuffix" option is "false"', () => {
    it('should return number with ordinal suffix', () => {
      fixtures.forEach(([num, suffix]): void => {
        expect(ordinal(num)).toBe(`${num}'${suffix}`);
      });
    });
  });

  describe('given "onlySuffix" option is "true"', () => {
    it('should return only return the suffix', () => {
      fixtures.forEach(([num, suffix]): void => {
        expect(ordinal(num, true)).toBe(suffix);
      });
    });
  });
});
