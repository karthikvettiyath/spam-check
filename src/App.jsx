import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Form from "./form";
import About from "./pages/About";
import Help from "./pages/Help";
import History from "./pages/History";
import Account from "./pages/Account";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
