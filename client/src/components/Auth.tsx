import { login } from "../lib/auth"
import { Formik, Form, ErrorMessage } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "./primitives/Button"
import { Input } from "./primitives/Input"
import { Flex } from "./primitives/Flex"
import { Text } from "./primitives/Text"
import { useAtom } from "jotai"
import { userAtom } from "../store"

export const Auth = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [user, setUser] = useAtom(userAtom)

  console.log(params)

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        try {
          const user = await login(values.email, values.password)
          if (user) {
            setUser({ accessToken: user.accessToken, isLoading: false })
          }
          navigate("/dashboard")
        } catch (err) {}
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex direction="column" gap="16">
            <Text as="label" htmlFor="email">
              Username
            </Text>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              autoFocus
            />
            <ErrorMessage name="email" component="div" />

            <Text as="label" htmlFor="password">
              Password
            </Text>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
            />
            <ErrorMessage name="email" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}
