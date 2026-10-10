import Sidebar from "../components/Sidebar";
import "../styles/DashboardLayout.css";
import hospitalImage from "../assets/newherohospital.png";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="dashboard-content">

        {/* Welcome Banner */}
        <div className="welcome-banner">

          <div className="banner-content">

            <h1>Welcome to Hospital OP Management System</h1>

            <p>
              Manage Patients, Doctors, Appointments and Departments
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

        {/* Dashboard Cards */}

        <div className="dashboard-cards">

          <div className="card">
            <h2>250</h2>
            <p>Total Patients</p>
          </div>

          <div className="card">
            <h2>28</h2>
            <p>Doctors</p>
          </div>

          <div className="card">
            <h2>14</h2>
            <p>Departments</p>
          </div>

          <div className="card">
            <h2>65</h2>
            <p>Today's Appointments</p>
          </div>

        </div>

        {/* Recent Activity */}

        <div className="recent-section">

          <h2>Recent Activities</h2>

          <table>

            <thead>

              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Arun Kumar</td>
                <td>Dr. Ravi</td>
                <td>Cardiology</td>
                <td>Waiting</td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Dr. Meena</td>
                <td>Dermatology</td>
                <td>Completed</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;