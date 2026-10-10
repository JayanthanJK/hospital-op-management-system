import { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";
import axios from "axios";

function AdminDashboard() {

  const [patients, setPatients] = useState([]);
const [dashboard, setDashboard] = useState({
  totalPatients: 0,
  totalDoctors: 0,
  totalDepartments: 0,
  totalAppointments: 0,
});
useEffect(() => {
  loadPatients();
  loadDashboard();
}, []);

const loadPatients = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/patients"
    );

    setPatients(response.data);
  } catch (error) {
    console.log(error);
  }
};

const loadDashboard = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/dashboard"
    );

    setDashboard(response.data);
  } catch (error) {
    console.log(error);
  }
};
  return (

    
    <div className="dashboard">

      

      <div className="main-content">

        <h1>Hospital Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>{dashboard.totalPatients}</h2>
            <p>Total Patients</p>
          </div>

          <div className="card">
            <h2>{dashboard.totalAppointments}</h2>
            <p>Today's Appointments</p>
          </div>

          <div className="card">
            <h2>{dashboard.totalDoctors}</h2>
            <p>Doctors Available</p>
          </div>

          <div className="card">
            <h2>{dashboard.totalDepartments}</h2>
            <p>Departments</p>
          </div>

        </div>

        <div className="table-section">

          <h2>Recent Patients</h2>

          <table>

            <thead>
              <tr>
                <th>OP Number</th>
                <th>Patient Name</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {patients.map((patient) => (
  <tr key={patient.id}>
    <td>{patient.opNumber}</td>
    <td>{patient.firstName} {patient.lastName}</td>
    <td>{patient.department}</td>
    <td>{patient.doctor}</td>
    <td>Pending</td>
  </tr>
))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;