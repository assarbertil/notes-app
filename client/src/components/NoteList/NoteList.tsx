import { useNotes } from "../../hooks/useNotes"
import { Note } from "../Note"
import { Button, Flex, Text } from "../primitives"
import { NoteListContainer } from "./noteList.children"

export const NoteList = () => {
  const { notes } = useNotes()

  return (
    <NoteListContainer>
      <Flex justify="between" align="center" css={{ marginBottom: "2rem" }}>
        <Text as="h2" size="large" weight="bold">
          Alla anteckningar
        </Text>
        <Button color="grass">Skapa ny</Button>
      </Flex>
      {notes?.map(({ id, title }) => (
        <Note key={id} id={id} title={title} />
      ))}
    </NoteListContainer>
  )
}
