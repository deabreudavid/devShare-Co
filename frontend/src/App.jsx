import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
