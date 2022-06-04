import { globalCss } from "./stitches.config"

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  "::selection": {
    backgroundColor: "#fedca87a",
  },

  html: {
    fontFamily: "$inter",
    color: "$blue12",
    background: "$blue2",
  },

  "#root": {
    display: "flex",
  },
})
