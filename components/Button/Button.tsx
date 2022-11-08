import { FC } from "react";
import buttonProps from "./Button.types";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { BUTTON_TYPE_BUTTON, BUTTON_VARIANT_PRIMARY } from "./Button.constants";

const Button: FC<buttonProps> = ({
    type = BUTTON_TYPE_BUTTON,
    disabled = false,
    onClick = undefined,
    variant = BUTTON_VARIANT_PRIMARY,
    children,
}) => {
    return <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={classNames(styles.button, { [styles.disabled]: disabled, [styles[variant]]: variant })}
    >{children}</button>;
};

export default Button;
