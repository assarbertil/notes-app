import { styled } from "../../stitches.config"

export const Grid = styled("div", {
  boxSizing: "border-box",
  display: "grid",

  variants: {
    align: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "end" },
      between: { justifyContent: "space-between" },
    },
    flow: {
      row: { gridAutoFlow: "row" },
      column: { gridAutoFlow: "column" },
      dense: { gridAutoFlow: "dense" },
      rowDense: { gridAutoFlow: "row dense" },
      columnDense: { gridAutoFlow: "column dense" },
    },
    columns: {
      1: { gridTemplateColumns: "repeat(1, 1fr)" },
      2: { gridTemplateColumns: "repeat(2, 1fr)" },
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
    },
    gap: {
      1: { gap: "$1" },
      2: { gap: "$2" },
      4: { gap: "$4" },
      8: { gap: "$8" },
      16: { gap: "$16" },
      24: { gap: "$24" },
      32: { gap: "$32" },
      48: { gap: "$48" },
      64: { gap: "$64" },
    },
    gapX: {
      1: { columnGap: "$1" },
      2: { columnGap: "$2" },
      4: { columnGap: "$4" },
      8: { columnGap: "$8" },
      16: { columnGap: "$16" },
      24: { columnGap: "$24" },
      32: { columnGap: "$32" },
      48: { columnGap: "$48" },
      64: { columnGap: "$64" },
    },
    gapY: {
      1: { rowGap: "$1" },
      2: { rowGap: "$2" },
      4: { rowGap: "$4" },
      8: { rowGap: "$8" },
      16: { rowGap: "$16" },
      24: { rowGap: "$24" },
      32: { rowGap: "$32" },
      48: { rowGap: "$48" },
      64: { rowGap: "$64" },
    },
  },
})
