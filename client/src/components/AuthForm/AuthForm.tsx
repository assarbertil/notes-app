import { Formik, Form as FormikForm } from "formik"
import { useNavigate } from "react-router-dom"
import { Button, Input, Flex, Link, Text } from "../primitives"
import { signupSchema } from "./signupSchema"
import { useAuthForm } from "./useAuthForm"
import { styled } from "../../stitches.config"
import { motion, useAnimation } from "framer-motion"
import { motionAnimate, motionTransition } from "./authForm.animations"
import { useAtom } from "jotai"
import { accessTokenAtom } from "../../store"

export const AuthForm = () => {
  const navigate = useNavigate()
  const { handleSubmit, authType } = useAuthForm()
  const controls = useAnimation()
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)

  return (
    <FormContainer animate={controls} transition={motionTransition}>
      <Text as="h1" size="large" weight="bold" css={{ marginBottom: "2rem" }}>
        {authType === "login" ? "Sign in" : "Sign up"}
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          const success = await handleSubmit(values)
          if (success) {
            await controls.start(motionAnimate)

            console.log("Auth form wants to redirect to dashboard")

            navigate("/dashboard")
          }
        }}
      >
        {({ isSubmitting, errors, touched, setErrors }) => (
          <FormikForm noValidate>
            <Flex direction="column" gap="24">
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
                autoFocus
                shouldShowError={touched.email && !!errors.email}
                errorMsg={errors.email}
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                shouldShowError={touched.password && !!errors.password}
                errorMsg={errors.password}
              />
              <Button type="submit" disabled={isSubmitting}>
                {authType === "login" ? "Sign in" : "Sign up"}
              </Button>
              <Flex justify="center" align="center">
                <Line />
                <Link
                  onClick={() => setErrors({})}
                  color="secondary"
                  to={authType === "login" ? "/auth/signup" : "/auth/login"}
                  css={{ padding: "0 0.5rem" }}
                >
                  {authType === "login"
                    ? "No account? Sign up"
                    : "Already have an account? Log in"}
                </Link>
                <Line />
              </Flex>
            </Flex>
            {/* <Button
              onClick={() => {
                setAccessToken("Assar")
              }}
            >
              Set
            </Button>
            <Button
              onClick={() => {
                setAccessToken("Något annat")
              }}
            >
              Change
            </Button> */}
          </FormikForm>
        )}
      </Formik>
    </FormContainer>
  )
}

const FormContainer = styled(motion.div, {
  border: "1px solid $blue5",
  padding: "3rem",
  borderRadius: "0.75rem",
  background: "#fff",
  boxShadow: "0 0.5rem 2rem rgba(0, 0, 0, 0.1)",
})

const Line = styled("div", {
  border: 0,
  borderBottom: "1px solid $blue6",
  height: 1,
  flexGrow: 1,
})
