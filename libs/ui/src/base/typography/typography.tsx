import { FC } from "react"
import { IText } from "."

export const Text: FC<IText> = ({children, as, onhover, onpress}) => {
    if (!as) return <span onClick={onpress}>{children}</span>
    return <h1 onClick={onpress}>{children}</h1>
}
