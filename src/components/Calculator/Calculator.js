import React from 'react';
import {
  Container,
  Screen,
  TopValue,
  BottomValue,
} from './styled';

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <TopValue>12+</TopValue>
        <BottomValue>55</BottomValue>
      </Screen>
    </Container>
  );
}
