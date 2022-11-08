import { ReactNode } from "../../types";
import {
  INPUT_TYPE_BUTTON,
  INPUT_TYPE_CHECKBOX,
  INPUT_TYPE_COLOR,
  INPUT_TYPE_DATE,
  INPUT_TYPE_DATETIME_LOCAL,
  INPUT_TYPE_EMAIL,
  INPUT_TYPE_FILE,
  INPUT_TYPE_HIDDEN,
  INPUT_TYPE_IMAGE,
  INPUT_TYPE_MONTH,
  INPUT_TYPE_NUMBER,
  INPUT_TYPE_PASSWORD,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_RANGE,
  INPUT_TYPE_RESET,
  INPUT_TYPE_SEARCH,
  INPUT_TYPE_SUBMIT,
  INPUT_TYPE_TEL,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_TIME,
  INPUT_TYPE_URL,
  INPUT_TYPE_WEEK
} from "./Input.constants";

export type InputTypes =
  | typeof INPUT_TYPE_BUTTON
  | typeof INPUT_TYPE_CHECKBOX
  | typeof INPUT_TYPE_COLOR
  | typeof INPUT_TYPE_DATE
  | typeof INPUT_TYPE_DATETIME_LOCAL
  | typeof INPUT_TYPE_EMAIL
  | typeof INPUT_TYPE_FILE
  | typeof INPUT_TYPE_HIDDEN
  | typeof INPUT_TYPE_IMAGE
  | typeof INPUT_TYPE_MONTH
  | typeof INPUT_TYPE_NUMBER
  | typeof INPUT_TYPE_PASSWORD
  | typeof INPUT_TYPE_RADIO
  | typeof INPUT_TYPE_RANGE
  | typeof INPUT_TYPE_RESET
  | typeof INPUT_TYPE_SEARCH
  | typeof INPUT_TYPE_SUBMIT
  | typeof INPUT_TYPE_TEL
  | typeof INPUT_TYPE_TEXT
  | typeof INPUT_TYPE_TIME
  | typeof INPUT_TYPE_URL
  | typeof INPUT_TYPE_WEEK

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
  children?: ReactNode
}

export default inputProps;
