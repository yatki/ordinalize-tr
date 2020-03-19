const pow = (n: number): number => 10 ** n;
const getSuffix = (number: number): string => {
  const suffixes = {
    1: 'inci',
    2: 'nci',
    3: 'üncü',
    4: 'üncü',
    5: 'inci',
    6: 'ncı',
    7: 'nci',
    8: 'inci',
    9: 'uncu',

    10: 'uncu',
    20: 'nci',
    30: 'uncu',
    40: 'ıncı',
    50: 'nci',
    60: 'ıncı',
    70: 'inci',
    80: 'inci',
    90: 'ıncı',

    100: 'üncü',
    [pow(3)]: 'inci',
    [pow(4)]: 'inci',
    [pow(5)]: 'inci',

    [pow(6)]: 'uncu',
    [pow(7)]: 'uncu',
    [pow(8)]: 'uncu',

    [pow(9)]: 'ıncı',
    [pow(10)]: 'ıncı',
    [pow(11)]: 'ıncı',
  };

  // Zero is exception
  if (number === 0) {
    return 'ıncı';
  }

  let tempNumber = number;
  const positions = [10, 100, 1000, pow(6), pow(9), pow(12)];
  for (let i = 0; i < positions.length; i += 1) {
    const position = positions[i];
    const remaining = tempNumber % position;
    if (remaining > 0) {
      return suffixes[remaining];
    }
    tempNumber -= remaining;
  }

  // Suffix always same after 10^12
  return 'uncu';
};

export { getSuffix };
