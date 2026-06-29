import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardHome from "./pages/dashboard-home";
import ExerciseCatalog from "./pages/exercise-catalog";
import ExerciseDetailsPage from "./pages/exercise-details";
import ProgressTracker from "./pages/progress-tracker";
import WorkoutSession from "./pages/workout-session";
import LoginAndRegistration from "./pages/login-and-registration";
import UserProfile from "./pages/user-profile";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route
          path="/login"
          element={<LoginAndRegistration />}
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={<DashboardHome />}
        />

        <Route
          path="/dashboard-home"
          element={<DashboardHome />}
        />

        {/* Exercise Pages */}
        <Route
          path="/exercise-catalog"
          element={<ExerciseCatalog />}
        />

        <Route
          path="/exercise-details"
          element={<ExerciseDetailsPage />}
        />

        {/* Progress Tracker */}
        <Route
          path="/progress-tracker"
          element={<ProgressTracker />}
        />

        {/* Workout Session */}
        <Route
          path="/workout-session"
          element={<WorkoutSession />}
        />

        <Route
          path="/user-profile"
          element={<UserProfile />}
        />

      </Routes>
    </BrowserRouter>
  );
}