import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Whatsapp from "./Components/Whatsapp";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";
import FeaturedProject from "./Pages/FeaturedProject";
import JoinUs from "./Pages/JoinUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about-us" Component={AboutUs} />
          <Route exact path="/our-services" Component={OurServices} />
          <Route exact path="/feature-project" Component={FeaturedProject} />
          <Route exact path="/join-us" Component={JoinUs} />
          <Route exact path="/contact-us" Component={ContactUs} />
        </Routes>
        <Whatsapp />
      </Router>
    </>
  );
}

export default App;
