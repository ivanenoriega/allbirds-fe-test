import { ReactNode } from "../../types";

type buttonTypes = 'submit' | 'button' | 'reset';

interface buttonProps {
    children: ReactNode
    type?: buttonTypes
    disabled?: boolean
}

export default buttonProps;
