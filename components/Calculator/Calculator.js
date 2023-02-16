import React, { useState } from 'react';
import {
  Container,
  Screen,
  TopValue,
  BottomValue,
  Button,
} from './styled';

export default function Calculator() {
  const [topVal, setTopVal] = useState('');
  const [operation, setOperation] = useState('');

  const [current, setCurrent] = useState('');

  const appendValue = (el) => {
    let value = el.target.getAttribute('data');
    if (value === '.' && current.includes('.')) return;

    if (value === '+/-') {
      let num = parseFloat(current);

      if (current === '' || num <= 0) {
        value = '+';
        setOperation(value);
        setCurrent(String(num));
      }
      if (num > 0) {
        num *= -1;
        value = '-';
        setCurrent(String(num));
        setOperation(value);
      }
    }
    setCurrent(current + value);
  };

  const handleAllClear = () => {
    setCurrent('');
    setTopVal('');
    setOperation('');
  };

  const compute = () => {
    let result;
    const currentNumber = parseFloat(current);
    const topValNumber = parseFloat(topVal);
    if (currentNumber.isNaN || topValNumber.isNaN) return;
    switch (operation) {
      case '÷':
        result = topValNumber / currentNumber;
        break;
      case 'X':
        result = topValNumber * currentNumber;
        break;
      case '%':
        result = topValNumber % currentNumber;
        break;
      case '-':
        result = topValNumber - currentNumber;
        break;
      case '+':
        result = topValNumber + currentNumber;
        break;
      case '+/-':
        if (topValNumber >= 0 && currentNumber >= 0) {
          result = -1 * (topValNumber + currentNumber);
        } else if (topValNumber >= 0 && currentNumber < 0) {
          result = -1 * (topValNumber + currentNumber);
        } else if (topValNumber < 0 && currentNumber < 0) {
          result = -1 * (topValNumber + currentNumber);
        }
        break;
      default:
        return;
    }
    // eslint-disable-next-line consistent-return
    return result;
  };

  const equals = () => {
    const value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setTopVal('');
    setOperation('');
  };

  const chooseOperatiion = (el) => {
    if (current === '') return;
    if (topVal !== '') {
      const value = compute();
      setTopVal(value);
    } else {
      setTopVal(current);
    }
    setCurrent('');
    setOperation(el.target.getAttribute('data'));
  };

  return (
    <Container>
      <Screen>
        <TopValue>
          {topVal}
          {' '}
          {operation}
        </TopValue>
        <BottomValue>{current}</BottomValue>
      </Screen>
      <Button className="hove" onClick={handleAllClear}>AC</Button>
      <Button data="+/-" onClick={appendValue} className="hove" operation>+/-</Button>

      <Button data="%" onClick={chooseOperatiion} className="hove" operation>%</Button>

      <Button data="÷" onClick={chooseOperatiion} className="oranges" operation>÷</Button>
      <Button data="7" onClick={appendValue} className="hove">7</Button>
      <Button data="8" onClick={appendValue} className="hove">8</Button>

      <Button data="9" onClick={appendValue} className="hove">9</Button>

      <Button data="X" onClick={chooseOperatiion} className="oranges" operation>X</Button>

      <Button data="4" onClick={appendValue} className="hove">4</Button>

      <Button data="5" onClick={appendValue} className="hove">5</Button>

      <Button data="6" onClick={appendValue} className="hove">6</Button>

      <Button data="-" onClick={chooseOperatiion} className="oranges" operation>-</Button>

      <Button data="1" onClick={appendValue} className="hove">1</Button>

      <Button data="2" onClick={appendValue} className="hove">2</Button>

      <Button data="3" onClick={appendValue} className="hove">3</Button>

      <Button data="+" onClick={chooseOperatiion} className="oranges" operation>+</Button>

      <Button data="0" onClick={appendValue} className="zero hove">0</Button>

      <Button data="." onClick={appendValue} className="hove">.</Button>

      <Button className="oranges" onClick={equals}>=</Button>
    </Container>
  );
}
