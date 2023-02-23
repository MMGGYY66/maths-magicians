import { render, screen } from '@testing-library/react'; import DisplayElements from '../components/DisplayElements';

it('should', () => {
  render(<DisplayElements>0</DisplayElements>);

  const displayElements = screen.getByText(/0/i);

  expect(displayElements.innerHTML).toBe('0');
});
