import { motion } from "framer-motion"
import { styled } from "../../stitches.config"

export const Placeholder = styled(motion.div, {
  border: "2px dashed $blue6",
  borderRadius: "1rem",
  display: "grid",
  placeItems: "center",
  color: "$blue8",
  userSelect: "none",
})
