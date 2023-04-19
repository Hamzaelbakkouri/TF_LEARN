import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const cooki = new Cookies();


function App() {
  const [role, setRole] = useState();
  const cookis = cooki.get('login');
  useEffect(() => {
    if (cookis) {
      setRole(cookis.user.role)
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Statistique" element={<Statistique />} />
            <Route path="/admin/languages" element={<Language_d />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/addSyntaxe" element={<Syntaxe_insert />} />
            <Route path="/admin/addExample" element={<Example_insert />} />
            <Route path="/admin/syntaxes" element={<Syntaxes />} />
            <Route path="/languges_posts" element={<Language_page />} />
            <Route path="/all_syntaxes" element={<All_syntaxes />} />
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