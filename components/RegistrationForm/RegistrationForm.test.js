import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationForm from './RegistrationForm';

let container;
const getFirstNameInput = () => screen.getByRole('textbox', {
  name: /first name/i
});

describe('RegistrationForm', () => {
  beforeEach(() => {
    const { container: rtlContainer } = render(<RegistrationForm />);
    container = rtlContainer;
  });
  describe('static content', () => {
    it('first name', () => {
      const label = screen.getByText(/first name/i);
      const input = screen.getByRole('textbox', {
        name: /first name/i
      });
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('last name', () => {
      const label = screen.getByText(/last name/i);
      const input = screen.getByRole('textbox', {
        name: /last name/i
      });
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('phone number', () => {
      const label = screen.getByText(/phone number/i);
      const input = screen.getByRole('textbox', {
        name: /phone number/i
      });
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('email', () => {
      const label = screen.getByText(/email \*/i);
      const input = screen.getByRole('textbox', {
        name: /email \*/i
      });
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('password', () => {
      const label = screen.getByText(new RegExp(/^password \*$/, "i"));
      const input = container.querySelector('#password');
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('confirm password', () => {
      const label = screen.getByText(/confirm password \*/i);
      const input = container.querySelector('#confirm_password');
      expect(label).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    it('submit button', () => {
      const submitButtonLabel = screen.getByRole('button', { name: /register/i });
      expect(submitButtonLabel).toBeInTheDocument();
    });
    it('reset button', () => {
      const resetButtonLabel = screen.getByRole('button', { name: /reset/i });
      expect(resetButtonLabel).toBeInTheDocument();
    });
  });
  describe('input validations', () => {
    describe('first name', () => {
      it('happy path', () => {
        const input = getFirstNameInput();
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'valid text value' } });
        expect(input.value).toBe('valid text value');
      });
      it('invalid characters', () => {
        const input = getFirstNameInput();
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: '!invalid text value' } });
        expect(input.value).toBe('!invalid text value');
        const errorMessage = screen.getByText(/first name cannot contain special characters\./i);
        expect(errorMessage).toBeInTheDocument();
      });
    });
    describe('last name', () => {
      it('happy path', () => {
        const input = screen.getByRole('textbox', {
          name: /last name/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'valid text value' } });
        expect(input.value).toBe('valid text value');
      });
      it('invalid characters', () => {
        const input = screen.getByRole('textbox', {
          name: /last name/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: '!invalid text value' } });
        expect(input.value).toBe('!invalid text value');
        const errorMessage = screen.getByText(/last name cannot contain special characters\./i);
        expect(errorMessage).toBeInTheDocument();
      });
    });
    describe('phone number', () => {
      it('happy path', () => {
        const input = screen.getByRole('textbox', {
          name: /phone number/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: '1234567890' } });
        expect(input.value).toBe('(123) 456-7890');
      });
      it('invalid format', () => {
        const input = screen.getByRole('textbox', {
          name: /phone number/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: '12345' } });
        expect(input.value).toBe('(123) 45');
        const errorMessage = screen.getByText(/phone number has wrong format\. ex: \(123\) 456\-7890\./i);
        expect(errorMessage).toBeInTheDocument();
      });
    });
    describe('email', () => {
      it('happy path', () => {
        const input = screen.getByRole('textbox', {
          name: /email/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'test@test.com' } });
        expect(input.value).toBe('test@test.com');
      });
      it('invalid format', () => {
        const input = screen.getByRole('textbox', {
          name: /email/i
        });
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'invalid email' } });
        expect(input.value).toBe('invalid email');
        const errorMessage = screen.getByText(/email has invalid format\. ex: user@company\.com/i);
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});