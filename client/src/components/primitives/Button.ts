import { styled } from "../../stitches.config"

export const Button = styled("button", {
  border: 0,
  cursor: "pointer",
  fontFamily: "$inter",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",

  "&:disabled": {
    background: "$mauve4",
    color: "$mauve11",
    cursor: "not-allowed",
  },

  variants: {
    color: {
      blue: {
        color: "$blue11",
        background: "$blue4",

        "&:hover": { background: "$blue3" },
        "&:active": { background: "$blue4" },
      },
      crimson: {
        color: "$crimson11",
        background: "$crimson4",

        "&:hover": { background: "$crimson3" },
        "&:active": { background: "$crimson4" },
      },
      grass: {
        color: "$grass11",
        background: "$grass4",

        "&:hover": { background: "$grass3" },
        "&:active": { background: "$grass4" },
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
    color: "blue",
    size: "base",
  },
})
