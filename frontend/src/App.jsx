import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./components/footer.jsx";
import NotFound from "./pages/admin/NotFound.jsx";
import Statistique from "./pages/admin/Statistique.jsx";
import Language_d from "./pages/admin/Language_d.jsx";
import Users from "./pages/admin/users.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cookies from "universal-cookie";
import Home from "./pages/users/Home.jsx";
import Syntaxe_insert from "./pages/admin/Syntaxe_insert.jsx";
import Syntaxes from "./pages/admin/syntaxes.jsx";
import Language_page from "./pages/users/Language_page.jsx";
import Example_insert from "./pages/admin/example_insert.jsx";
import All_syntaxes from "./pages/users/All_syntaxes.jsx";
import Syntaxe_example from "./pages/users/Syntaxe_example.jsx";
import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";
import Favorites from "./pages/users/Favorites.jsx";

const cookies = new Cookies();
const cooki = localStorage.getItem('role');


function App() {
  const toast = useRef(null);
  const login = useSelector((state) => state.user.isLoggedIn)
  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }
  // const showError = (message) => {
  //   toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  // }

  useEffect(() => {
    if (login) showSuccess('LoggedIn')
  }, [login]);

  return (
    <div>
      <Toast ref={toast} />
      <BrowserRouter>
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Statistique" element={cooki != 0 ? <Home /> : <Statistique />} />
            <Route path="/admin/languages" element={cooki != 0 ? <Home /> : <Language_d />} />
            <Route path="/admin/users" element={cooki != 0 ? <Home /> : <Users />} />
            <Route path="/admin/addSyntaxe" element={cooki != 0 ? <Home /> : <Syntaxe_insert />} />
            <Route path="/admin/addExample" element={cooki != 0 ? <Home /> : <Example_insert />} />
            <Route path="/admin/syntaxes" element={cooki != 0 ? <Home /> : <Syntaxes />} />
            <Route path="/languge_post" element={<Language_page />} />
            <Route path="/example_page" element={<Syntaxe_example />} />
            <Route path="/all_syntaxes" element={<All_syntaxes />} />
            <Route path="/favorite" element={<Favorites />} />  
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;