import { FC } from "react"
import { IText } from "."

export const Text: FC<IText> = ({children, as}) => {
    if (!as) return <p>{children}</p>
    return <h1>{children}</h1>
}
