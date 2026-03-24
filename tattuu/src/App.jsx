import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className='font-dm-serif-display-regular text-custom-white'>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
