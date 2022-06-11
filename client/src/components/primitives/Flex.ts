import { motion } from "framer-motion"
import { styled } from "../../stitches.config"

export const Flex = styled(motion.div, {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
      rowReverse: { flexDirection: "row-reverse" },
      columnReverse: { flexDirection: "column-reverse" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
    },
    wrap: {
      noWrap: { flexWrap: "nowrap" },
      wrap: { flexWrap: "wrap" },
      wrapReverse: { flexWrap: "wrap-reverse" },
    },
    gap: {
      4: { gap: "0.25rem" },
      8: { gap: "0.5rem" },
      16: { gap: "1rem" },
      24: { gap: "1.5rem" },
      32: { gap: "2rem" },
      48: { gap: "3rem" },
      64: { gap: "4rem" },
      128: { gap: "8rem" },
      256: { gap: "16rem" },
      512: { gap: "32rem" },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
})
