import { Layout } from "./components/Layout"
import { globalStyles } from "./globalStyles"

export default function App() {
  globalStyles()

  return (
    <>
      <form
        action={`${process.env.REACT_APP_BACKEND_URL}/auth/login/password`}
        method="post"
      >
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </section>
        <button type="submit">Sign in</button>
      </form>

      <form
        action={`${process.env.REACT_APP_BACKEND_URL}/auth/register/password`}
        method="post"
      >
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </section>
        <button type="submit">Register</button>
      </form>
    </>
  )
}
