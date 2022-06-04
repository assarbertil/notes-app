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
        color: "$blue10",
        background: "$blue5",

        "&:hover": { background: "$blue4" },
        "&:disabled": { background: "$mauve4", color: "$mauve10" },
      },
    },
    size: {
      base: {
        fontSize: "1rem",
        padding: "0.625rem 1rem",
        borderRadius: 5,
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "base",
  },
})
