import { BrowserRouter, Routes, Route } from "react-router-dom";


import PatientForm from "./pages/PatientForm";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


import DoctorManagement from "./pages/DoctorManagement";
import AppointmentList from "./pages/AppointmentList";
import DepartmentManagement from "./pages/DepartmentManagement";
import SearchPatient from "./pages/SearchPatient";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import PatientList from "./pages/PatientList";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        

        <Route path="/doctors" element={<DoctorManagement />} />

        <Route path="/appointments" element={<AppointmentList />} />

        <Route path="/departments" element={<DepartmentManagement />} />

        <Route path="/search" element={<SearchPatient />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/patientlist" element={<PatientList />} />
        <Route path="/dashboardlayout" element={<DashboardLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;