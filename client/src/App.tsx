import { globalStyles } from "./globalStyles"
import { Routes, Route, Outlet } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { AuthForm } from "./components/AuthForm"
import { useRouteGuard } from "./hooks/useRouteGuard"
import { SWRConfig } from "swr"
import { useAxios } from "./hooks/useAxios"

export default function App() {
  useRouteGuard()
  globalStyles()
  const axios = useAxios()
  const swrConfig = {
    fetcher: (url: string) => axios.get(url).then(({ data }) => data),
  }

  return (
    <SWRConfig value={swrConfig}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="notes" element={<Dashboard />}>
            <Route path=":id" element={<Outlet />} />
          </Route>

          <Route path="auth" element={<Outlet />}>
            <Route path="login" element={<AuthForm />} />
            <Route path="signup" element={<AuthForm />} />
          </Route>
        </Route>
      </Routes>
    </SWRConfig>
  )
}
