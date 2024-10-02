import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Whatsapp from "./Components/Whatsapp";
import useTitleChangeOnBlur from "./Components/useTitleChangeOnBlur";
import OurSevices from "./Components/oursevices"; // Corrected import
import Carousel from './Components/Carousel';

function App() {
  useTitleChangeOnBlur("Saudi - Event", "Come back to Saudi - Event!");

  return (
    <Router basename="/"> {/* Remove the basename or set it to "/" */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<OurSevices />} />
          {/* Add other routes here if needed */}
        </Routes>
        <Whatsapp />
        <section className="exhibitions">
          <h2>Exhibitions</h2>
          <Carousel />
        </section>
      </div>
    </Router>
  );
}

export default App;
