import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
