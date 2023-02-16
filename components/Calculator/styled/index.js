import styled from 'styled-components';

export const Container = styled.div`
  width: 440px;
  margin: 50px auto;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 110px);
  grid-template-rows: minmax(110px, 150px) repeat(5, 110px);
  box-shadow: 6px 6px 26px black;
  border-radius: 16px;
  background: rgba(255,255,255,0.85);
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  pading: 12px;
  border-radius: 16px 16px 0 0;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
`;

export const TopValue = styled.div`
  color: rgba(255,255,255,0.85);
  font-size: 1.8rem;
`;

export const BottomValue = styled.div`
  color: rgba(255,255,255, 1);
  font-size: 2.6rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background: rgba(255,255,255, 0.75);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: black;
  border: 2px outset #eee;
  box-shadow: 2px 2px 12px black;
`;
