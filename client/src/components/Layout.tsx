import { FC } from "react"
import { styled } from "../stitches.config"
import { Note } from "../types/Note"

interface Props {
  notes?: Note
}

export const Layout: FC<Props> = ({ notes }) => <Sidebar />

export const Sidebar = styled("aside", {
  flex: "0 0 16rem",
})
