import calculate from './calculate';

// clicking on ('AC') button
describe('Calculate', () => {
  it('should return an object with all properties have null as value', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '+',
    };

    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  // clicking on numbered-value buttons button
  it('Should append the number to next with no operation', () => {
    const result = calculate({ total: null, next: 4, operation: 'null' }, '7');

    expect(result).toStrictEqual({
      total: null,
      next: '47',
      operation: 'null',
    });
  });

  // clicking on ('+/-') button
  it('should return the opposite sign of the number', () => {
    const obj = {
      total: '8',
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '-8',
      next: null,
      operation: null,
    });

    const obj2 = {
      total: '-8',
      next: null,
      operation: null,
    };

    expect(calculate(obj2, buttonName)).toStrictEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  // clicking on ('=') button
  it('should return total when the operation (+) when the (=) button is pressed', () => {
    const obj = {
      total: '8',
      next: '9',
      operation: '+',
    };

    const buttonName = '=';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '17',
      next: null,
      operation: null,
    });
  });
});
