import { FC } from "react";
import buttonProps from "./Button.types";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { BUTTON_TYPE_BUTTON } from "./Button.constants";

const Button: FC<buttonProps> = ({ children, type = BUTTON_TYPE_BUTTON, disabled = false }) => {
    return <button
        disabled={disabled}
        type={type}
        className={classNames(styles.button, { [styles.disabled]: disabled })}
    >{children}</button>;
};

export default Button;
