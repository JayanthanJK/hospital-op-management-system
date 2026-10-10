import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PatientList.css";
  
  

function PatientList() {

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPatients();
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

const searchPatients = async () => {

    try {

        if (search.trim() === "") {

            loadPatients();
            return;

        }

        const response = await axios.get(
            "http://localhost:8080/api/patients/search",
            {
                params: {
                    keyword: search
                }
            }
        );

        setPatients(response.data);

    } catch (error) {

        console.log(error);

    }

};


useEffect(() => {

    searchPatients();

}, [search]);

  return (
    <div className="patient-page">

      <div className="patient-header">
        <h1>Patient Management</h1>

        <button className="add-btn">
          + Add Patient
        </button>
      </div>

      <div className="search-section">

        <input
          type="text"
          placeholder="Search by Patient Name / OP Number..."
           value={search}
    onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>OP No</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile Number</th>
              <th>Date Of Birth</th>
              <th>Department</th>
              <th>Doctor Reference</th>
              <th>Appointment Date</th>
              <th>Status</th>
              

            </tr>

          </thead>

          <tbody>

{patients.map((patient) => (

<tr key={patient.id}>

<td>{patient.id}</td>

<td>
{patient.firstName} {patient.lastName}
</td>

<td>{patient.age}</td>

<td>{patient.gender}</td>

<td>{patient.mobileNumber}</td>

<td>{patient.dateofBirth}</td>

<td>{patient.department}</td>

<td>{patient.doctor}</td>

<td>{patient.appointmentDate}</td>

<td>

<span className="waiting">

Waiting

</span>

</td>

</tr>

))}

</tbody>

        </table>

      </div>

    </div>
  );
}

export default PatientList;