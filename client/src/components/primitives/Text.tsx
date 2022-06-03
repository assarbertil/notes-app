import { styled } from "../../stitches.config"

export const Text = styled("span", {
  color: "#000",
  textDecoration: "none",

  variants: {
    type: {
      body: { fontSize: "1rem" },
    },
  },

  defaultVariants: { type: "body" },
})
