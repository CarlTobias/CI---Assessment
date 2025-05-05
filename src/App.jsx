import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/forum" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
