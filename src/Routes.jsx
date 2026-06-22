import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import DashboardHome from "./pages/dashboard-home";

const ExerciseCatalog = () => <h1>Exercises</h1>;
const ExerciseDetailsPage = () => <h1>Exercise Details</h1>;
const ProgressTracker = () => <h1>Progress</h1>;
const LoginAndRegistration = () => <h1>Login</h1>;
const AdminDashboard = () => <h1>Admin</h1>;

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/dashboard-home" element={<DashboardHome />} />
        <Route path="/exercise-catalog" element={<ExerciseCatalog />} />
        <Route path="/exercise-details" element={<ExerciseDetailsPage />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/login-and-registration" element={<LoginAndRegistration />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;