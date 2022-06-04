import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { SWRConfig } from "swr"
import { axios } from "./utils/axiosInstance"
import { AxiosRequestConfig } from "axios"

const swrConfig = {
  fetcher: async (url: string, config: AxiosRequestConfig) =>
    await axios.get(url, config),
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </React.StrictMode>
)
