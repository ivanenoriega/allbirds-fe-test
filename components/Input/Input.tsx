import classNames from "classnames";
import { FC } from "react";
import styles from "./Input.module.scss";
import inputProps from "./Input.types";

const Input: FC<inputProps> = ({
  type = 'text',
  value = '',
  message = '',
  hasError = false,
  required = false,
  children = null,
  name,
  label,
  id,
  maxlength,
  onChange,
}) => {
  return (
    <label className={classNames(styles.label, { [styles.hasError]: hasError })}>
      {children}
      {label && <span className={styles.text}>{label}</span>}
      <input
        maxLength={maxlength}
        value={value}
        id={id}
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      />
      {message && <span className={styles.message}>{message}</span>}
    </label>
  );
};

export default Input;
