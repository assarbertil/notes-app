import { FormEvent } from "react"
import { Layout } from "./components/Layout"
import { globalStyles } from "./globalStyles"
import { login, register } from "./lib/auth"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default function App() {
  globalStyles()

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values)
          login(values.email, values.password)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <section>
              <label htmlFor="username">Username</label>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                required
                autoFocus
              />
              <ErrorMessage name="email" component="div" />
            </section>
            <section>
              <label htmlFor="current-password">Password</label>
              <Field
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
              <ErrorMessage name="email" component="div" />
            </section>
            <button type="submit" disabled={isSubmitting}>
              Sign in
            </button>
          </Form>
        )}
      </Formik>

      {/* Register */}

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values)
          register(values.email, values.password)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <section>
              <label htmlFor="username">Username</label>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                required
                autoFocus
              />
              <ErrorMessage name="email" component="div" />
            </section>
            <section>
              <label htmlFor="current-password">Password</label>
              <Field
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
              <ErrorMessage name="email" component="div" />
            </section>
            <button type="submit" disabled={isSubmitting}>
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
