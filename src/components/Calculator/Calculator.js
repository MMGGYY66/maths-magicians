import React, { useState } from 'react';
import {
  Container,
  Screen,
  TopValue,
  BottomValue,
  Button,
} from './styled';
import calculate from '../../logic/calculate';

export default function Calculator() {
  const [result, setResult] = useState(0);

  /*

  const [current, setCurrent] = useState('');

  const appendValue = (el) => {
    const value = el.target.getAttribute('data');
    if (value === '.' && current.includes('.')) return;
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
      default:
        return;
    }
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
*/
  const handleCLick = (e) => {
    setResult((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <Container>
      <Screen>
        <TopValue />
        <BottomValue>{result.next || result.total || 0}</BottomValue>
      </Screen>

      <Button className="hove" onClick={handleCLick}>AC</Button>

      <Button data="+/-" onClick={handleCLick} className="hove" operation>+/-</Button>

      <Button data="%" onClick={handleCLick} className="hove" operation>%</Button>

      <Button data="÷" onClick={handleCLick} className="oranges" operation>÷</Button>

      <Button data="7" onClick={handleCLick} className="hove">7</Button>

      <Button data="8" onClick={handleCLick} className="hove">8</Button>

      <Button data="9" onClick={handleCLick} className="hove">9</Button>

      <Button data="x" onClick={handleCLick} className="oranges" operation>x</Button>

      <Button data="4" onClick={handleCLick} className="hove">4</Button>

      <Button data="5" onClick={handleCLick} className="hove">5</Button>

      <Button data="6" onClick={handleCLick} className="hove">6</Button>

      <Button data="-" onClick={handleCLick} className="oranges" operation>-</Button>

      <Button data="1" onClick={handleCLick} className="hove">1</Button>

      <Button data="2" onClick={handleCLick} className="hove">2</Button>

      <Button data="3" onClick={handleCLick} className="hove">3</Button>

      <Button data="+" onClick={handleCLick} className="oranges" operation>+</Button>

      <Button data="0" onClick={handleCLick} className="zero hove">0</Button>

      <Button data="." onClick={handleCLick} className="hove">.</Button>

      <Button className="oranges" onClick={handleCLick}>=</Button>
    </Container>
  );
}
