import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import "../styles/DashboardLayout.css";
import hospitalImage from "../assets/newherohospital.png";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>🏥 Hospital OP</h2>
      </div>

      <ul>

        <li><Link to="/dashboard">🏠 Dashboard</Link></li>

        <li><Link to="/patientlist">👤 Patients</Link></li>

        <li><Link to="/doctors">👨‍⚕️ Doctors</Link></li>

        <li><Link to="/appointments">📅 Appointments</Link></li>

        <li><Link to="/departments">🏥 Departments</Link></li>

        <li><Link to="/search">🔍 Search Patient</Link></li>

        <li><Link to="/reports">📊 Reports</Link></li>

        <li><Link to="/settings">⚙️ Settings</Link></li>

        <li><Link to="/admin-login">🚪 Logout</Link></li>

      </ul>

    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="welcome-banner">

          <div className="banner-content">

            <h2>Welcome to Hospital OP Management System</h2>

            <p>
              Manage patients, doctors, appointments and departments
              from one centralized dashboard.
            </p>

            <button className="banner-btn">
              View Today's Appointments
            </button>

          </div>

          <div className="banner-image">

            <img
              src={hospitalImage}
              alt="Hospital"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;