import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Statistique from "./pages/Statistique";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistique" element={<Statistique />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* <Navbar /> */}
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;