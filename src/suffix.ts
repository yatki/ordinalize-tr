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
    [10 ** 3]: 'inci',
    [10 ** 4]: 'inci',
    [10 ** 5]: 'inci',

    [10 ** 6]: 'uncu',
    [10 ** 7]: 'uncu',
    [10 ** 8]: 'uncu',

    [10 ** 9]: 'ıncı',
    [10 ** 10]: 'ıncı',
    [10 ** 11]: 'ıncı',
  };

  // Zero is exception
  if (number === 0) {
    return 'ıncı';
  }

  let tempNumber = number;
  const positions = [10, 100, 1000, 10 ** 6, 10 ** 9, 10 ** 12];
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
