import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { styled } from "../../stitches.config"
import { Flex } from "../primitives/Flex"
import { Link } from "../primitives/Link"
import { motion } from "framer-motion"

export const Dashboard = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SidebarElement>
        <Flex
          direction="column"
          gap="8"
          justify="between"
          css={{ height: "100%" }}
        >
          <Flex direction="column" css={{ padding: "1rem" }}>
            <Link to="/dashboard">Home</Link>
            <Link to="/auth/login">Login</Link>
          </Flex>
          <LogoutButton
            onClick={async () => {
              await logout()
              navigate("/auth/login")
            }}
          >
            Log out
          </LogoutButton>
        </Flex>
      </SidebarElement>
      <ContentElement>
        <Header>
          <Flex></Flex>
        </Header>
        <Outlet />
      </ContentElement>
    </motion.div>
  )
}

export const SidebarElement = styled("aside", {
  flex: "0 0 16rem",
  height: "100vh",
  background: "#fff",
})

const Header = styled("header", {
  height: "3.5rem",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
})

const ContentElement = styled("main", {
  flex: 1,
  height: "calc(100vh - 3.5rem)",
  background: "$mauve2",
})

const LogoutButton = styled("button", {
  width: "100%",
  height: "4rem",
  color: "$blue10",
  background: "$blue5",
  border: 0,
  padding: 0,
  fontSize: "1rem",
  cursor: "pointer",

  "&:hover": { color: "$mauve4" },
})
