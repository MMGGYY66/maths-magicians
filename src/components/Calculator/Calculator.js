import React from 'react';
import {
  Container,
  Screen,
  TopValue,
  BottomValue,
  Button,
} from './styled';

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <TopValue>12+</TopValue>
        <BottomValue>55</BottomValue>
      </Screen>
      <Button className="hove">AC</Button>
      <Button className="hove">+/-</Button>
      <Button className="hove">%</Button>
      <Button className="oranges">÷</Button>
      <Button className="hove">7</Button>
      <Button className="hove">8</Button>
      <Button className="hove">9</Button>
      <Button className="oranges">X</Button>
      <Button className="hove">4</Button>
      <Button className="hove">5</Button>
      <Button className="hove">6</Button>
      <Button className="oranges">-</Button>
      <Button className="hove">1</Button>
      <Button className="hove">2</Button>
      <Button className="hove">3</Button>
      <Button className="oranges">+</Button>
      <Button className="zero hove">0</Button>
      <Button className="hove">.</Button>
      <Button className="oranges">=</Button>
    </Container>
  );
}
