import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/admin/Sidebar.jsx'
import Footer from "./components/Footer";
import NotFound from "./pages/admin/NotFound.jsx";
import Home from "./pages/admin/home.jsx";
import Language_d from "./pages/admin/Language_d.jsx";
import Users from "./pages/admin/users.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserBar from "./components/UserBar.jsx";
import Cookies from "universal-cookie";

const cooki = new Cookies();


function App() {
  const [role, setRole] = useState();
  const cookis = cooki.get('login');

  useEffect(() => {
    setRole(cookis.user.role)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col">
          {(role === 0) ? <Sidebar /> : <UserBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/languages" element={<Language_d />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {(role !== 0) ? <Footer /> : ''}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;