import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/GeneralComponents/Navbar";
import Services from "./pages/Services";
import Footer from "./components/GeneralComponents/Footer";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/Reusable-components/BackToTopButton/BackToTopButton";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
