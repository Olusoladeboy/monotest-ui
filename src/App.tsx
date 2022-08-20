import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Signup } from "./pages/signup/signup";
import { Login } from "./pages/login/login";
import { LinkAccount } from "./pages/link-account/link-account";
import Dashboard from "./pages/dashboard/dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="general-wrapper">
        {/* <ul>
          <li>
            <Link to="/register">Signup</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/link-account" element={<LinkAccount />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
