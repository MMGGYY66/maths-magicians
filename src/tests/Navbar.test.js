import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('should', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  const listItem = screen.getAllByRole('listitem');
  expect(listItem).toHaveLength(3);
});
