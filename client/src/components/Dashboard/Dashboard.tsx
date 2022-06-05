import { useUser } from "../../hooks/useUser"
import { Button } from "../primitives"
import { dashboardMotion } from "./dashboard.animations"
import { Container } from "./dashboard.children"
import { Preview } from "../Preview"
import { Editor } from "../Editor"
import { NoteList } from "../NoteList"

export const Dashboard = () => {
  const { logout } = useUser()

  return (
    <Container
      initial={dashboardMotion.initial}
      animate={dashboardMotion.animate}
      exit={dashboardMotion.exit}
      transition={dashboardMotion.transition}
    >
      <NoteList />
      <Editor isOpen={false} />
      <Preview isOpen={false} />

      <Button
        color="crimson"
        css={{
          position: "fixed",
          bottom: "1rem",
          left: "1rem",
          boxShadow: "$sm",
        }}
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </Container>
  )
}
