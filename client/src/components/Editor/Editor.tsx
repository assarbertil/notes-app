import { motion } from "framer-motion"
import { FC } from "react"
import { Placeholder } from "../primitives"
import { editorMotion } from "./editor.animations"

interface Props {
  isOpen: boolean
}

export const Editor: FC<Props> = ({ isOpen }) => {
  if (!isOpen) return <Placeholder>Välj en anteckning</Placeholder>

  return (
    <motion.div
      initial={editorMotion.initial}
      animate={editorMotion.animate}
      exit={editorMotion.exit}
      transition={editorMotion.transition}
    >
      Editor
    </motion.div>
  )
}
