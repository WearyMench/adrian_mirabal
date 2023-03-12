import { Global } from "./App.styles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom  ";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import NotFound from "./pages/NotFoundPages";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <NavBar />
      <Routes>
        <Route path="/adrian_mirabal/" element={<Home />} />
        <Route path="/adrian_mirabal/works" element={<Works />} />
        <Route path="/adrian_mirabal/contact" element={<Contact />} />
        <Route path="/adrian_mirabal/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
