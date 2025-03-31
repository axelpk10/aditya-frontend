import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import SalesReport from "./pages/SalesReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales-report" element={<SalesReport />} />
      </Routes>
    </Router>
  );
}

export default App;
