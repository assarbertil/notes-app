export const editorMotion = {
  in: {
    y: -1024,
  },
  base: {
    y: 0,
  },
  out: {
    y: -1024,
  },
  transition: {
    type: "spring",
    damping: 15,
  },
}

export const toolbarMotion = {
  in: {
    opacity: 0,
  },
  base: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
  transition: {
    type: "ease",
  },
}
