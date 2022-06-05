import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { SWRConfig } from "swr"
import { BrowserRouter } from "react-router-dom"

const swrConfig = {}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
)
