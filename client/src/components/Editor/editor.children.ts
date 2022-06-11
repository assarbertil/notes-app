import { motion } from "framer-motion"
import { styled } from "../../stitches.config"
import { EditorContent as EditorElement } from "@tiptap/react"

export const EditorContainer = styled(motion.div, {
  position: "relative",
})

export const EditorWrapper = styled(motion.div, {
  padding: "4rem 10rem 4rem 6rem",
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

export const Toolbar = styled(motion.div, {
  position: "absolute",
  top: 0,
  right: 0,
  width: "4rem",
  height: "100%",
  paddingTop: "2rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.5rem",
  alignItems: "center",
  background: "$amber2",
  borderRadius: "0 1rem 1rem 0",
})

export const EditLabel = styled("p", {
  background: "$amber4",

  padding: "0.5rem",
  textAlign: "center",
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "$amber12",
  width: "100%",
})

export const ButtonContainer = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: 6,
  cursor: "pointer",
  transition: "background 0.2s ease-in-out",

  "&:hover": {
    transition: "background 0s ease-in-out",
    background: "$amber4",
  },
})

export const Divider = styled(motion.div, {
  width: "100%",
  height: 1,
  background: "$amber4",
})
