import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardHome from "./pages/dashboard-home";
import ExerciseCatalog from "./pages/exercise-catalog";
import ExerciseDetailsPage from "./pages/exercise-details";
import ProgressTracker from "./pages/progress-tracker";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardHome />} />

        <Route
          path="/exercise-catalog"
          element={<ExerciseCatalog />}
        />

        <Route
          path="/exercise-details"
          element={<ExerciseDetailsPage />}
        />

        <Route
          path="/progress-tracker"
          element={<ProgressTracker />}
        />
      </Routes>
    </BrowserRouter>
  );
}