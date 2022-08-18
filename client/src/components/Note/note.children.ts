import { motion } from "framer-motion"
import { styled } from "../../stitches.config"

export const NoteContainer = styled(motion.button, {
  boxShadow: "$sm",
  padding: "0 1rem",
  height: "4rem",
  background: "transparent",
  width: "100%",
  maxWidth: "100%",
  border: 0,
  font: "inherit",
  marginBottom: "1rem",
  cursor: "pointer",
  borderRadius: "0.5rem",
  textDecoration: "none",
  color: "$blue12",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "left",
  transition: "background 0.2s ease-in-out",
  "&:hover": { transition: "background 0s ease-in-out" },

  "&:active": { background: "$blue2" },

  variants: {
    active: {
      false: {
        outline: "2px dashed $blue6",
        color: "$blue12",
        opacity: 0.5,
        "&:hover": { background: "$blue4" },
      },
      true: {
        outline: 0,
        background: "#fff",
      },
    },

    softDisable: {
      true: { cursor: "not-allowed" },
    },
  },
})

export const Article = styled("article", { width: "calc(100% - 5rem)" })

export const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  columnGap: "0.5rem",
})

export const NoteButton = styled("span", {
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  border: 0,
  background: "transparent",
  padding: "0.5rem",
  cursor: "pointer",
  aspectRatio: 1,
  borderRadius: "0.25rem",
  transition: "background 0.2s ease-in-out",
  "&:hover": { transition: "background 0s ease-in-out" },

  variants: {
    color: {
      blue: {
        color: "$blue9",
        "&:hover": { background: "$blue4" },
        "&:active": { background: "$blue5" },
      },
      grass: {
        color: "$grass9",
        "&:hover": { background: "$grass4" },
        "&:active": { background: "$grass5" },
      },
      crimson: {
        color: "$crimson9",
        "&:hover": { background: "$crimson4" },
        "&:active": { background: "$crimson5" },
      },
    },
  },

  defaultVariants: {
    color: "blue",
  },
})
