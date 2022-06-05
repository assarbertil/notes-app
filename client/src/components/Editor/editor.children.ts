import { motion } from "framer-motion"
import { styled } from "../../stitches.config"
import { EditorContent as EditorElement } from "@tiptap/react"

export const EditorContainer = styled(motion.div, {
  position: "relative",
})

export const EditorWrapper = styled(motion.div, {
  padding: "2rem",
  borderRadius: "1rem",
  background: "#fff",
  boxShadow: "$sm",
  position: "absolute",
  inset: 0,
})

export const EditorContent = styled(EditorElement, {
  height: "100%",

  ".ProseMirror": {
    height: "100%",

    "&:focus-visible": {
      outline: 0,
    },
  },
})

export const EditLabel = styled("span", {
  background: "$crimson9",
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "#fff",
  padding: "0.25rem 0.75rem",
  position: "absolute",
  top: 0,
  right: "4rem",
  borderRadius: "0 0 0.5rem 0.5rem",
})
