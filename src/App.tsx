import React, { useEffect } from "react";
import logo from "./logo.svg";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignInWrapper from "./pages/SignIn/SignIn";
import ContactsWrapper from "./pages/Contacts/Contacts";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProtectedAuthorized from "./components/ProtectedAuthorized/ProtectedAuthorized";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<ContactsWrapper />} />
        </Route>
        <Route element={<ProtectedAuthorized />}>
          <Route path="/sign-in" element={<SignInWrapper />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
