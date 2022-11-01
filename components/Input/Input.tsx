import { FC } from "react"
import styles from "./Input.module.scss"
import inputProps from "./types"

const Input: FC<inputProps> = ({type = 'text', value = '', onChange, name, label, id, maxlength}) => {
  const input = <input maxLength={maxlength} value={value} id={id} className={styles.input} type={type} name={name} onChange={onChange} />
  const inputWithLabel = <label className={styles.label}><p className={styles.text}>{label}</p>{input}</label>

  return label ? inputWithLabel : input
}

export default Input
