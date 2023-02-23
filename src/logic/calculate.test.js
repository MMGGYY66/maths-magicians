import calculate from './calculate';

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

  it('Should append the number to next if there is no operation', () => {
    const result = calculate({ total: null, next: 5, operation: 'null' }, '8');

    expect(result).toStrictEqual({
      total: null,
      next: '58',
      operation: 'null',
    });
  });

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
  });

  it('should return total when the operation (+) when the (=) button has pressed', () => {
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
