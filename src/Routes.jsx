import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardHome from "./pages/dashboard-home";
import ExerciseCatalog from "./pages/exercise-catalog";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/exercise-catalog" element={<ExerciseCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}