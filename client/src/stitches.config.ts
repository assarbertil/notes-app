import { createStitches } from "@stitches/react"
import { mauve, blue, crimson, grass, amber } from "@radix-ui/colors"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...blue,
      ...crimson,
      ...grass,
      ...amber,
    },
    fonts: {
      inter: "Inter, -apple-system, system-ui, sans-serif",
    },
    shadows: {
      lg: "0 8px 32px rgba(126, 142, 177, 0.15)",
      md: "0 4px 16px rgba(126, 142, 177, 0.15)",
      sm: "0px 2px 4px rgba(126, 142, 177 ,0.15)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
})
