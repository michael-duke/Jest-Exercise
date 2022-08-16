const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./tasks');

//Task 1
it('string "Selam" should return 5', () =>
  expect(stringLength('Selam')).toBe(5));

it("'' should will throw an Invalid string length", () =>
  expect(() => {
    stringLength('I am a very long sentence');
  }).toThrow('Invalid string length'));

it('string should have a length between 1 and 10 inclusive', () =>
  expect(() => {
    stringLength('I am a very long sentence');
  }).toThrow('Invalid string length'));

//Task 2
it('string "Racecar" should return racecaR', () =>
  expect(reverseString('Racecar')).toBe('racecaR'));

//Task 3
describe("Calculator and it's 4 methods", () => {
  const calculator = new Calculator();

  describe('Add method', () => {
    it('2+2 should return 4', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });

    it('4+4 should return 8', () => {
      expect(calculator.add(4, 4)).toBe(8);
    });

    it('-4+2 should return -2', () => {
      expect(calculator.add(-4, 2)).toBe(-2);
    });
  });

  describe('Subtract method', () => {
    it('2-1 should return 1', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });

    it('14-7 should return 7', () => {
      expect(calculator.subtract(14, 7)).toBe(7);
    });

    it('-4-(-8) should return 4, follows PODMAS principle', () => {
      expect(calculator.subtract(-4, -8)).toBe(4);
    });
  });

  describe('Multiply method', () => {
    it('1234*0 should return 0', () => {
      expect(calculator.mult(1234, 0)).toBe(0);
    });

    it('4*2 should return 8', () => {
      expect(calculator.mult(4, 2)).toBe(8);
    });

    it('-1*(-121) should return 121, two negative mult should be positive', () => {
      expect(calculator.mult(-1, -121)).toBe(121);
    });
  });

  describe('Divide method', () => {
    it('1234/0 should return 0', () => {
      expect(() => {
        calculator.divide(1234, 0);
      }).toThrow('Division by 0 not allowed');
    });

    it('16/4 should return 4', () => {
      expect(calculator.divide(16, 4)).toBe(4);
    });

    it('-10/-5 should return 121, two negative mult should be positive', () => {
      expect(calculator.divide(-10, -5)).toBe(2);
    });
  });
});

//Task 4
describe('Capitalize a string', () => {
  it('string "aladdin" shoud be "Aladdin"', () => {
    expect(capitalize('aladdin')).toBe('Aladdin');
  });
  it('string "NETFLIX" shoud be "Netflix", only uppercase to capitalize', () => {
    expect(capitalize('NETFLIX')).toBe('Netflix');
  });
  it('string "MicHAeL" shoud be "Michael", scrambeld lower and uppercase', () => {
    expect(capitalize('MicHAeL')).toBe('Michael');
  });
  it('string "the LORD of the rings" shoud be "The Lord Of The Rings", more than one word in a string', () => {
    expect(capitalize('the LORD of the rings')).toBe('The Lord Of The Rings');
  });
});
