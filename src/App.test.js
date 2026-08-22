import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders update button and cards, and updates cards on click', () => {
  let callCount = 0;
  // Mock Math.random to return sequential predictable values
  const mockRandom = jest.spyOn(Math, 'random').mockImplementation(() => {
    const values = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    const val = values[callCount % values.length];
    callCount++;
    return val;
  });

  render(<App />);

  // First values: 
  // 0.1 * 100 + 1 = 11
  // 0.2 * 100 + 1 = 21
  // 0.3 * 100 + 1 = 31
  expect(screen.getByText(/This card's value is 11/)).toBeInTheDocument();
  expect(screen.getByText(/This card's value is 21/)).toBeInTheDocument();
  expect(screen.getByText(/This card's value is 31/)).toBeInTheDocument();

  // Find and click the button
  const button = screen.getByRole('button', { name: /update cards/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  // Next values:
  // 0.4 * 100 + 1 = 41
  // 0.5 * 100 + 1 = 51
  // 0.6 * 100 + 1 = 61
  expect(screen.getByText(/This card's value is 41/)).toBeInTheDocument();
  expect(screen.getByText(/This card's value is 51/)).toBeInTheDocument();
  expect(screen.getByText(/This card's value is 61/)).toBeInTheDocument();

  mockRandom.mockRestore();
});
