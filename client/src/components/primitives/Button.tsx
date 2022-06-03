import { styled } from "../../stitches.config"

export const Button = styled("button", {
  border: 0,
  cursor: "pointer",
  fontFamily: "$inter",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",

  variants: {
    color: {
      primary: {
        color: "#fff",
        bg: "#000",
      },
      secondary: {
        color: "#fff",
        bg: "#000",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
})
