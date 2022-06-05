import { useAtom } from "jotai"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { accessTokenAtom, routerGuardLockAtom } from "../store"

// This protects routes that require a user to be logged in.
// It checks if the user is logged in and redirects to the login page if not.

export const useRouteGuard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [routerGuardLock] = useAtom(routerGuardLockAtom)
  const [accessToken] = useAtom(accessTokenAtom)

  useEffect(() => {
    // Makes it possible to override the guard
    if (routerGuardLock) return

    // If the user is on index, redirect
    if (pathname === "/" || pathname === "") {
      if (accessToken) {
        navigate("/notes")
      } else {
        navigate("/auth/login")
      }
    }

    // If the user is logged out, and tries to access dashboard routes redirect to the login page
    if (!accessToken && !pathname.includes("/auth")) {
      navigate("/auth/login")
    }
  }, [accessToken, navigate, pathname, routerGuardLock])
}
