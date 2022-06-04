import { globalStyles } from "./globalStyles"
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom"
import { FullScreen } from "./components/layouts/FullScreen"
import { Dashboard } from "./components/layouts/Dashboard"
import { Auth } from "./components/Auth"
import { styled } from "./stitches.config"

export default function App() {
  globalStyles()

  return (
    <>
      <Fixed>{"user.accessToken" || "Inget än"}</Fixed>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="auth" element={<FullScreen />}>
              <Route path="login" element={<Auth />} />
              <Route path="register" element={<Auth />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const Fixed = styled("div", {
  position: "fixed",
  top: 32,
  right: 32,
  background: "$crimson11",
  padding: 32,
  color: "#fff",
  borderRadius: 16,
})
