import { render } from '@testing-library/react';
import App from './App';

test('renders content', () => {
  const { getByTestId } = render(<App />);
  const contentElement = getByTestId('content');
  expect(contentElement).toBeInTheDocument();
});
