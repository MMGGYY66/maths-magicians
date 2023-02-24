import operate from './operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });

  it('subtracts two numbers', () => {
    expect(operate(3, 2, '-')).toEqual('1');
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });

  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toEqual('2');
  });

  it('handles division by zero', () => {
    expect(operate(6, 0, '÷')).toEqual("Can't divide by 0.");
  });

  it('finds modulo of two numbers', () => {
    expect(operate(5, 2, '%')).toEqual('1');
  });

  it('handles modulo when dividing by zero', () => {
    expect(operate(5, 0, '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate(2, 3, '&')).toThrow("Unknown operation '&'");
  });
});
