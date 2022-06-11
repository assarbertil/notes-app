import { globalCss } from "./stitches.config"

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  "html, body": {
    height: "100%",
    lineHeight: 1.5,
    fontFamily: "$inter",
    color: "$blue12",
    background: "$blue3",
  },

  "#root": {
    height: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
  },

  "::selection": {
    backgroundColor: "#0180ff44",
  },

  ".ProseMirror > ul, .ProseMirror > ol": {
    paddingLeft: "1.25rem",
  },

  ".ProseMirror > blockquote": {
    paddingLeft: "1.25rem",
    borderLeft: "1px solid $mauve9",
    fontStyle: "italic",
  },
})
