import { motion } from "framer-motion"
import { styled } from "../../stitches.config"

export const Container = styled(motion.div, {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "2rem",
  padding: "8rem",
})
