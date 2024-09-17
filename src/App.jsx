import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Whatsapp from "./Components/Whatsapp";
import PublicRoute from "./Components/PublicRoute";
import useTitleChangeOnBlur from "./Components/useTitleChangeOnBlur";
import TextComponent from "./Components/TextComponent";
function App() {
  useTitleChangeOnBlur('Saudi - Event', 'Come back to Saudi - Event!');

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" commponet={PublicRoute}>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about-us" Component={TextComponent} />
            {/* <Route exact path="/our-services" Component={OurServices} />
            <Route exact path="/feature-project" Component={FeaturedProject} />
            <Route exact path="/join-us" Component={JoinUs} />
            <Route exact path="/contact-us" Component={ContactUs} /> */}
          </Route>
        </Routes>
        <Whatsapp />
      </Router>
    </>
  );
}

export default App;

