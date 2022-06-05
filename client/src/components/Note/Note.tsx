import { FC } from "react"
import { Text } from "../primitives"
import { NoteContainer } from "./note.children"

interface NoteProps {
  id: string
  title: string
  content?: string
  isSelected?: boolean
}

export const Note: FC<NoteProps> = ({ id, title, content, isSelected }) => {
  return (
    <NoteContainer to={`/notes/${id}`} open={isSelected}>
      <article>
        <Text as="h2" weight="bold" css={{ marginBottom: "0.5rem" }}>
          {title}
        </Text>
        <Text as="p">{content && content} </Text>
      </article>
    </NoteContainer>
  )
}
