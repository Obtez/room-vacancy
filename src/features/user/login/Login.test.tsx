import { render, screen } from '@testing-library/react';
import Login from './Login';

test("render login form", () => {
  render(<Login />);
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
})