import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import MoreServices from "./components/MoreServices";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <Footer />
              <SocialLinks />
            </>
          }
        />

        {/* More Services page */}
        <Route path="/more-services" element={<MoreServices />} />
      </Routes>
    </>
  );
}

export default App;
