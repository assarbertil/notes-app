import { Link as NavLink } from "react-router-dom"
import { styled } from "../../stitches.config"

export const Link = styled(NavLink, {
  textDecoration: "unset",

  "&:disabled": { color: "$mauve4" },

  variants: {
    color: {
      primary: {
        color: "$blue11",
        "&:hover": { color: "$blue9" },
        "&:active": { color: "$blue11" },
      },
      secondary: {
        color: "$blue9",
        "&:hover": { color: "$blue8" },
        "&:active": { color: "$blue9" },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
})
