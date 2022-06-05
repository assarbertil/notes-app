import { Field } from "formik"
import { FC, ComponentProps } from "react"
import { styled } from "../../stitches.config"

interface Props extends ComponentProps<typeof InputElement> {
  name: string
  label: string
  shouldShowError: boolean | undefined
  errorMsg: string | undefined
}

export const Input: FC<Props> = ({
  id,
  label,
  shouldShowError,
  errorMsg,
  ...rest
}) => {
  return (
    <InputContainer>
      <LabelElement htmlFor={id}>{label}</LabelElement>
      <InputElement id={id} {...rest} />
      {shouldShowError && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </InputContainer>
  )
}

const InputContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
})

const LabelElement = styled("label", {
  fontWeight: 700,
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  userSelect: "none",
})

const InputElement = styled(Field, {
  fontFamily: "$inter",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  "&:focus": { outline: "1px solid $blue7" },
  "&::placeholder": { color: "$blue11" },

  variants: {
    color: {
      primary: {
        color: "$blue12",
        background: "$blue3",
        border: "1px solid $blue7",

        "&:hover": { background: "$blue4" },
        "&:disabled": { background: "$mauve4", color: "$mauve10" },
      },
    },
    size: {
      base: {
        fontSize: "1rem",
        padding: "0.625rem 1rem",
        borderRadius: 5,
      },
    },
  },

  defaultVariants: {
    color: "primary",
    size: "base",
  },
})

const ErrorMessage = styled("p", {
  color: "$crimson11",
  fontSize: "0.75rem",
  position: "absolute",
  top: 0,
  right: 0,
})
