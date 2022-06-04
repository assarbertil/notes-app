import { globalStyles } from "./globalStyles"
import { useAtom } from "jotai"
import { userAtom } from "./store"
import { axios } from "./utils/axiosInstance"
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom"
import { FullScreen } from "./components/layouts/FullScreen"
import { Dashboard } from "./components/layouts/Dashboard"
import { Auth } from "./components/Auth"
import useSWR from "swr"
import { AuthApiResponse } from "./types/AuthApiResponse"
import { styled } from "./stitches.config"

export default function App() {
  const [user, setUser] = useAtom(userAtom)
  useSWR(
    "/auth/refresh_token",
    (url) =>
      axios
        .post<AuthApiResponse>(url, null, {
          headers: { authorization: `Bearer ${user.accessToken}` },
        })
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        console.log("data", data)
        setUser({ accessToken: data.accessToken, isLoading: false })
      },
    }
  )

  globalStyles()

  return (
    <>
      <Fixed>{user.accessToken || "Inget än"}</Fixed>

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
