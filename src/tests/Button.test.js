import { render, screen } from '@testing-library/react'; import Button from '../components/Button';

it('should', () => {
  const children = 'AC';
  render(<Button onClick={() => { }}>{children}</Button>);
  const button = screen.getByRole('button');
  expect(button.innerHTML).toBe(children);
});
