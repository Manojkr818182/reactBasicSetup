import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Setting from "./pages/settings/Setting";
import Layout from "./components/layout/Layout";

const App = () => {
  const { userDetail } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        {userDetail ? (
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<Navigate to="/profile" replace />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
