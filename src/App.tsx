import { RouterProvider, createBrowserRouter } from "react-router-dom"

import routes from "./routes"
import SettingModal from "./modals/SettingModal"

export default function App() {
  const router = createBrowserRouter(routes)

  return (
    <div>
      <RouterProvider router={router} />
      <SettingModal />
    </div>
  )
}
