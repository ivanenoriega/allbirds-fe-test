import { ReactNode } from "../../types";
import {
    BUTTON_TYPE_BUTTON,
    BUTTON_TYPE_RESET,
    BUTTON_TYPE_SUBMIT,
    BUTTON_VARIANT_PRIMARY,
    BUTTON_VARIANT_SECONDARY
} from "./Button.constants";

type buttonTypes = typeof BUTTON_TYPE_SUBMIT | typeof BUTTON_TYPE_BUTTON | typeof BUTTON_TYPE_RESET;

interface buttonProps {
    children: ReactNode
    type?: buttonTypes
    disabled?: boolean
    variant?: typeof BUTTON_VARIANT_PRIMARY | typeof BUTTON_VARIANT_SECONDARY
    onClick?: (e?: any) => void
}

export default buttonProps;
