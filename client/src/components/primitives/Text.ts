import { styled } from "../../stitches.config"

export const Text = styled("span", {
  textDecoration: "none",

  variants: {
    size: {
      large: { fontSize: "1.25rem" },
      base: { fontSize: "1rem" },
      small: { fontSize: "0.75rem" },
    },
    weight: {
      bold: { fontWeight: "bold" },
      normal: { fontWeight: "normal" },
    },
  },

  defaultVariants: { size: "base", weight: "normal" },
})
