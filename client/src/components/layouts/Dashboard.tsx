import { Outlet } from "react-router-dom"
import { styled } from "../../stitches.config"
import { Link } from "../primitives/Link"

export const Dashboard = () => {
  return (
    <>
      <SidebarElement>
        <Link to="/dashboard">Home</Link>

        <Link to="/auth/login">Login</Link>
      </SidebarElement>
      <ContentElement>
        <Outlet />
      </ContentElement>
    </>
  )
}
const ContentElement = styled("main", {
  display: "flex",
  flex: "1",
  height: "100vh",
  background: "$mauve2",
})

export const SidebarElement = styled("aside", {
  display: "flex",
  flexDirection: "column",
  rowGap: "0.5rem",
  flex: "0 0 16rem",
  height: "100vh",
  padding: "1.5rem",
  background: "#fff",
})
