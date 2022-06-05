import { FC } from "react"
import { Placeholder } from "../primitives"

interface Props {
  isOpen: boolean
}

export const Preview: FC<Props> = ({ isOpen }) => {
  if (!isOpen) return <Placeholder>Förhandsvisning</Placeholder>

  return <Placeholder />
}
