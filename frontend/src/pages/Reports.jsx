
import "../styles/Reports.css";

function Reports() {
  return (
    <div className="page-container">

      <h1>Hospital Reports</h1>

      <div className="report-cards">

        <div className="report-card">
          Daily Patients
        </div>

        <div className="report-card">
          Monthly Patients
        </div>

        <div className="report-card">
          Department Reports
        </div>

        <div className="report-card">
          Doctor Reports
        </div>

      </div>

    </div>
  );
}

export default Reports;