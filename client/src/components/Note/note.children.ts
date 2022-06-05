import { styled } from "../../stitches.config"

export const NoteContainer = styled("button", {
  boxShadow: "$sm",
  padding: "0 1rem",
  height: "4rem",
  background: "transparent",
  width: "100%",
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
  transition: "opacity 0.2s ease-in-out",

  "&:active": { background: "$blue2" },

  variants: {
    active: {
      false: {
        outline: "2px dashed $blue6",
        color: "$mauve11",
        "&:hover": { background: "$blue4" },
      },
      true: {
        outline: 0,
        background: "#fff",
      },
    },

    softDisable: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
  },
})

export const NoteButton = styled("button", {
  border: 0,
  background: "transparent",
  padding: "0.5rem",
  cursor: "pointer",
  aspectRatio: 1,
  borderRadius: "0.25rem",

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
