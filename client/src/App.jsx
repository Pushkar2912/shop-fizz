import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PATHS } from "./utils/constants"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Layout from "./components/common/Layout"

const App = () => {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.SIGNUP} element={<SignUp />} />
      <Route path={PATHS.HOME} element={<Layout />} >
          <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
export default App