import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  beforeEach(() => {
    render(<RegistrationForm />);
  });
  it('renders an empty form', () => {
    const fistNameLabel = screen.getByText(/first name/i);
    expect(fistNameLabel).toBeInTheDocument();
    const lastNameLabel = screen.getByText(/last name/i);
    expect(lastNameLabel).toBeInTheDocument();
    const phoneNumberLabel = screen.getByText(/phone number/i);
    expect(phoneNumberLabel).toBeInTheDocument();
    const emailLabel = screen.getByText(/email \*/i);
    expect(emailLabel).toBeInTheDocument();
    const confirmPasswordLabel = screen.getByText(/confirm password \*/i);
    expect(confirmPasswordLabel).toBeInTheDocument();
    const submitButtonLabel = screen.getByRole('button', {
      name: /register/i
    });
    expect(submitButtonLabel).toBeInTheDocument();
    const resetButtonLabel = screen.getByRole('button', {
      name: /reset/i
    });
    expect(resetButtonLabel).toBeInTheDocument();
  });
});