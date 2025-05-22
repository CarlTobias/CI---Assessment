import { Navigate, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage2 from "./pages/LandingPage/LandingPage2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landing2" element={<LandingPage2 />} />
        <Route path="/home" element={<HomePage />} />

        {/* Uncomment for final */}
        {/* <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
