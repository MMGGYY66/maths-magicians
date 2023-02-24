import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator/Calculator';

it('should', () => {
  render(<Calculator />);

  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(19);
});
