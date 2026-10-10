
import "../styles/DepartmentManagement.css";

function DepartmentManagement() {
  return (
    <div className="page-container">
      <h1>Departments</h1>

      <div className="department-grid">

        <div className="dept-card">Cardiology</div>
        <div className="dept-card">Neurology</div>
        <div className="dept-card">Orthopedic</div>
        <div className="dept-card">Pediatrics</div>
        <div className="dept-card">Dermatology</div>

      </div>
    </div>
  );
}

export default DepartmentManagement;