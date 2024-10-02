import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Whatsapp from "./Components/Whatsapp";
import useTitleChangeOnBlur from "./Components/useTitleChangeOnBlur";
import OurSevices from "./Components/oursevices"; // Corrected import

function App() {
  useTitleChangeOnBlur("Saudi - Event", "Come back to Saudi - Event!");

  return (
    <div className="overflow-x-hidden">
      <Router basename="/SaudiExpert">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<OurSevices />} />
          {/* Add other routes here if needed */}
        </Routes>
        <Whatsapp />
      </Router>
    </div>
  );
}

export default App;
