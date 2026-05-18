import {
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "./components/LoginPage.tsx";
import SignupPage from "./components/SignupPage.tsx";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default Pages;