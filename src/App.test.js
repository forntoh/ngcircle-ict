import { render, screen } from '@testing-library/react';
import App from './App';

test("renders NgC GmbH", () => {
  render(<App />);
  const linkElement = screen.getByText(/NgC GmbH/i);
  expect(linkElement).toBeInTheDocument();
});
