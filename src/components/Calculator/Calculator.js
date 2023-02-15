import React, { useState } from 'react';
import {
  Container,
  Screen,
  TopValue,
  BottomValue,
  Button,
} from './styled';

export default function Calculator() {
  const [current, setCurrent] = useState('');

  const appendValue = (el) => {
    const value = el.target.getAttribute('data');
    if (value === '.' && current.includes('.')) return;
    setCurrent(current + value);
  };

  return (
    <Container>
      <Screen>
        <TopValue>12+</TopValue>
        <BottomValue>{current}</BottomValue>
      </Screen>
      <Button className="hove">AC</Button>
      <Button className="hove">+/-</Button>
      <Button className="hove">%</Button>
      <Button className="oranges">÷</Button>
      <Button data="7" onClick={appendValue} className="hove">7</Button>
      <Button data="8" onClick={appendValue} className="hove">8</Button>
      <Button data="9" onClick={appendValue} className="hove">9</Button>
      <Button className="oranges">X</Button>
      <Button data="4" onClick={appendValue} className="hove">4</Button>
      <Button data="5" onClick={appendValue} className="hove">5</Button>
      <Button data="6" onClick={appendValue} className="hove">6</Button>
      <Button className="oranges">-</Button>
      <Button data="1" onClick={appendValue} className="hove">1</Button>
      <Button data="2" onClick={appendValue} className="hove">2</Button>
      <Button data="3" onClick={appendValue} className="hove">3</Button>
      <Button className="oranges">+</Button>
      <Button data="0" onClick={appendValue} className="zero hove">0</Button>
      <Button data="." onClick={appendValue} className="hove">.</Button>
      <Button className="oranges">=</Button>
    </Container>
  );
}
