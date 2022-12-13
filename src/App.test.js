import { render, screen } from '@testing-library/react';
import App from './App';

it("Should display title showing Punk Api", () => {
  // Renders App
  render(<App/>)
  // Arrange

  const title = screen.getByText(/Punk API/i)
  // Acting

  expect(title).toBeInTheDocument()
  // Asserting
})