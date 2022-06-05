import { globalStyles } from "./globalStyles"
import { Routes, Route, Outlet } from "react-router-dom"
import { FullScreen } from "./components/layouts/FullScreen"
import { Dashboard } from "./components/layouts/Dashboard"
import { AuthForm } from "./components/AuthForm/"
import { styled } from "./stitches.config"
import { useAtom } from "jotai"
import { accessTokenAtom } from "./store"
import { useRouteGuard } from "./hooks/useRouteGuard"

export default function App() {
  const [accessToken] = useAtom(accessTokenAtom)
  useRouteGuard()

  globalStyles()

  return (
    <>
      <Fixed>JWT: {accessToken === null ? "Null" : accessToken}</Fixed>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<div>assar</div>} />
          </Route>

          <Route path="auth" element={<FullScreen />}>
            <Route path="login" element={<AuthForm />} />
            <Route path="signup" element={<AuthForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

const Fixed = styled("div", {
  position: "fixed",
  bottom: 4,
  right: 4,
  background: "$crimson9",
  padding: "0.5rem 1rem",
  maxWidth: "fit-content",
  display: "block",
  color: "#fff",
  borderRadius: 4,
  fontSize: 12,
})
