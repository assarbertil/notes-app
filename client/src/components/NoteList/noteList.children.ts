import { motion } from "framer-motion"
import { styled } from "../../stitches.config"

export const NoteListContainer = styled(motion.div, {
  borderRadius: "0.5rem",
})

export const NewNoteButtonContainer = styled("div", {
  position: "relative",
})

export const NewNoteButtonDisabler = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  cursor: "not-allowed",
})
