import { Global } from "./App.styles";

import Squares from "./components/Squares";
import NavBar from "./components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom  ";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import NotFound from "./pages/NotFoundPages";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Squares />
      <NavBar />
      <Routes>
        <Route path="/adrian_mirabal/" element={<Home />} />
        <Route path="/adrian_mirabal/about" element={<About />} />
        <Route path="/adrian_mirabal/works" element={<Works />} />
        <Route path="/adrian_mirabal/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
