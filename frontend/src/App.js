import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  useNavigate,
  Routes,
} from "react-router-dom";

import NavBar from "./Components/Navbar"; // adjust the path as needed

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Auth from "./Auth";

// private route ta odman eno ma 7ada yfout 3al homepage ella eza ken logged in
function PrivateRoute({ children }) {
  //l children hiye prop lal component
  if (!Auth.isUserAuthenticated) {
    //if usser is not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
