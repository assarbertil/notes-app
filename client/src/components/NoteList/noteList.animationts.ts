export const headerMotion = {
  in: {
    y: -32,
    opacity: 0,
  },
  base: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: -32,
    opacity: 0,
  },
  transition: {
    type: "spring",
    damping: 15,
  },
}

export const noteListMotion = {
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}
