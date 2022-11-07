type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface inputProps {
  type?: InputTypes
  value: string
  name: string
  label?: string
  id?: string
  maxlength?: number
  hasError?: boolean,
  message?: string,
  onChange?: (e?: any) => void,
  required?: boolean
}

export default inputProps;
