import { useAuth } from "../../hooks/useAuth"
import { Button } from "../primitives"
import { DashboardContainer } from "./dashboard.children"
import { Editor } from "../Editor"
import { NoteList } from "../NoteList"

export const Dashboard = () => {
  const { logout } = useAuth()

  return (
    <DashboardContainer>
      <NoteList />
      <Editor />

      <Button
        color="crimson"
        css={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
        }}
        onClick={() => logout()}
      >
        Logga ut
      </Button>
    </DashboardContainer>
  )
}
