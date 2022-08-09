import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInWrapper from "./pages/SignIn/SignIn";
import ContactsWrapper from "./pages/Contacts/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contacts" element={<ContactsWrapper />} />
        <Route path="/sign-in" element={<SignInWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
