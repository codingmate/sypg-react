import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders A프로젝트 and B프로젝트', () => {
  render(<Dashboard />);
  const aProjectElement = screen.getByText(/A프로젝트/i);
  const bProjectElement = screen.getByText(/B프로젝트/i);

  expect(aProjectElement).toBeInTheDocument();
  expect(bProjectElement).toBeInTheDocument();
});