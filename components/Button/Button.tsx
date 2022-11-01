import { FC } from "react"
import buttonProps from "./types"

const Button: FC<buttonProps> = ({children}) => {
    return <button>{children}</button>
}

export default Button
