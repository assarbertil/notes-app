import { globalCss } from "./stitches.config"

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  "::selection": {
    backgroundColor: "#fedca87a",
  },

  html: {
    fontFamily: "$inter",
  },
})
