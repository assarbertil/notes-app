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
        color: "$blue11",
        background: "$blue4",

        "&:hover": { background: "$blue3" },
        "&:disabled": {
          background: "$mauve4",
          color: "$mauve11",
          cursor: "not-allowed",
        },
        "&:active": { background: "$blue4" },
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
