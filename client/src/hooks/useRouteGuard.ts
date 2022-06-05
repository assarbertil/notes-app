import { useAtom } from "jotai"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { accessTokenAtom } from "../store"
import { useUser } from "./useUser"

// This protects routes that require a user to be logged in.
// It checks if the user is logged in and redirects to the login page if not.

export const useRouteGuard = () => {
  const { user, isLoading } = useUser()
  const [accessToken] = useAtom(accessTokenAtom)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    console.log("Route guard: User loading?", isLoading)

    if (!isLoading) {
      if (user && pathname.includes("/auth")) {
        console.log("Main guard wants to redirect to dashboard")

        navigate("/dashboard")
      }

      if (!user && pathname.includes("/dashboard")) {
        console.log("Main guard wants to redirect to auth")

        navigate("/auth/login")
      }
    }
  }, [isLoading, accessToken, user, navigate, pathname])

  useEffect(() => console.log("Route guard: Pathname:", pathname), [pathname])
}
