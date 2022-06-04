import { Link as NavLink } from "react-router-dom"
import { styled } from "../../stitches.config"

export const Link = styled(NavLink, {
  textDecoration: "unset",
  color: "$blue12",
  padding: "0.5rem 1rem",

  "&:hover": {
    background: "$blue3",
  },
})
