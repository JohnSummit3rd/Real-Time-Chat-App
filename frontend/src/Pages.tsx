import {
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "./components/LoginPage.tsx";
import SignupPage from "./components/SignupPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import ChatPage from "./components/ChatPage.tsx";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default Pages;