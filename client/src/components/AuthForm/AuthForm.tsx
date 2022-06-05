import { Formik, Form as FormikForm } from "formik"
import { useNavigate } from "react-router-dom"
import { Button, Input, Flex, Link, Text } from "../primitives"
import { authSchema } from "./authSchema"
import { useAuthForm } from "./useAuthForm"
import { styled } from "../../stitches.config"
import { AnimatePresence, motion } from "framer-motion"
import { formMotion } from "./authForm.animations"
import { atom, useAtom } from "jotai"
import { routerGuardLockAtom } from "../../store"

const showFormAtom = atom(true)

export const AuthForm = () => {
  const navigate = useNavigate()
  const { handleSubmit, authType } = useAuthForm()
  const [, setRouterGuardLock] = useAtom(routerGuardLockAtom)
  const [showForm, setShowForm] = useAtom(showFormAtom)

  return (
    <Container>
      <AnimatePresence>
        {showForm && (
          <FormContainer
            initial={formMotion.initial}
            animate={formMotion.animate}
            exit={formMotion.exit}
            transition={formMotion.transition}
          >
            <Text
              as="h1"
              size="large"
              weight="bold"
              css={{ marginBottom: "2rem" }}
            >
              {authType === "login" ? "Sign in" : "Sign up"}
            </Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={authSchema}
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={async (values) => {
                const success = await handleSubmit(values)
                if (success) {
                  setRouterGuardLock(true)
                  setShowForm(false)
                  setRouterGuardLock(false)
                  setTimeout(() => {
                    navigate("/notes")
                    setShowForm(true)
                  }, 2000)
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
                      autoComplete="off"
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
                        color="primary"
                        to={
                          authType === "login" ? "/auth/signup" : "/auth/login"
                        }
                        css={{ padding: "0 0.5rem", fontSize: "0.875rem" }}
                      >
                        {authType === "login"
                          ? "No account? Sign up"
                          : "Already have an account? Log in"}
                      </Link>
                      <Line />
                    </Flex>
                  </Flex>
                </FormikForm>
              )}
            </Formik>
          </FormContainer>
        )}
      </AnimatePresence>
    </Container>
  )
}

const Container = styled("main", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const FormContainer = styled(motion.div, {
  border: "1px solid $blue5",
  padding: "3rem",
  borderRadius: "0.75rem",
  background: "#fff",
  boxShadow: "$lg",
})

const Line = styled("div", {
  border: 0,
  borderBottom: "1px solid $blue6",
  height: 1,
  flexGrow: 1,
})
