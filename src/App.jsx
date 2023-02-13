import { Global } from "./App.styles";

import Squares from "./components/Squares";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom  ";

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
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Socials />
    </BrowserRouter>
  );
}

export default App;
