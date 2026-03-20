import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./components/routes/AboutUs";
import Work from "./components/routes/Work";
import Services from "./components/routes/Services";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <div className='font-dm-serif-display-regular'>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
