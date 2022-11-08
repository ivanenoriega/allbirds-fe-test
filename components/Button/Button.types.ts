import { ReactNode } from "../../types";
import { BUTTON_TYPE_BUTTON, BUTTON_TYPE_RESET, BUTTON_TYPE_SUBMIT } from "./Button.constants";

type buttonTypes = typeof BUTTON_TYPE_SUBMIT | typeof BUTTON_TYPE_BUTTON | typeof BUTTON_TYPE_RESET;

interface buttonProps {
    children: ReactNode
    type?: buttonTypes
    disabled?: boolean
}

export default buttonProps;
