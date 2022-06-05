import { Link } from "../primitives"
import { styled } from "../../stitches.config"

export const NoteContainer = styled(Link, {
  display: "block",
  boxShadow: "$sm",
  padding: "0.75rem 1rem",
  background: "#fff",
  marginBottom: "1rem",
  borderRadius: "0.5rem",
  border: 0,
  font: "inherit",
  textAlign: "left",
  width: "100%",
  cursor: "pointer",

  variants: {
    open: {
      true: {
        outline: "2px solid $blue11",
      },
      false: {
        outline: 0,
      },
    },
  },
})
