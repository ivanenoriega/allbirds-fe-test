import { ReactNode } from "../../types"

type buttonTypes = 'submit' | 'test'

interface buttonProps {
    children: ReactNode
    type: buttonTypes
}

export default buttonProps
