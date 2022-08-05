import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
//import Home from "./pages/Home";
import Login from "./pages/auth/LoginPage";
import Signup from "./pages/auth/RegisterPage";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
      </Routes>
    </>
  );
}

export default App;
