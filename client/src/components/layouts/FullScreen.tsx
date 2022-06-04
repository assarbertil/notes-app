import { Outlet } from "react-router-dom"
import { styled } from "../../stitches.config"

const FullScreenElement = styled("main", {
  height: "100vh",
  width: "100vw",
  background: "$blue2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const FullScreen = () => {
  return (
    <FullScreenElement>
      <Outlet />
    </FullScreenElement>
  )
}
