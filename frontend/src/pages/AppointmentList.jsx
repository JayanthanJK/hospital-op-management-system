import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "../styles/AppointmentList.css";

function AppointmentList() {

 const [showModal, setShowModal] = useState(false);

const [editingId, setEditingId] = useState(null);

const [patients, setPatients] = useState([]);

const [appointment, setAppointment] = useState({

    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    floor: "",
    roomNumber: "",
    status: "Waiting"

});

    

 
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

const handleChange = (e)=>{

    setAppointment({

        ...appointment,

        [e.target.name]:e.target.value

    });

};

const editAppointment = (patient)=>{

    setAppointment({

        doctor:patient.doctor,

        appointmentDate:patient.appointmentDate,

        appointmentTime:patient.appointmentTime,

        floor:patient.floor,

        roomNumber:patient.roomNumber,

        status:patient.status

    });

    setEditingId(patient.id);

    setShowModal(true);

};

const updateAppointment = async()=>{

    try{

        await axios.put(

            `http://localhost:8080/api/patients/${editingId}/appointment`,

            appointment

        );

        alert("Appointment Updated");

        loadPatients();

        setEditingId(null);

        setShowModal(false);

    }catch(error){

        console.log(error);

    }

};

  return (
    <div className="page-container">
      <h1>Appointments</h1>

      <table>
        <thead>
          <tr>
            <th>OP No</th>
            <th>Patient Name</th>
            <th>Doctor </th>
            <th>Date</th>
            <th>Time</th>
            <th>Floor Number</th>
            <th>Room Number</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>

{patients.map((patient) => (

<tr key={patient.id}>

    <td>{patient.opNumber}</td>

    <td>{patient.firstName} {patient.lastName}</td>

    <td>{patient.doctor}</td>
<td>{patient.appointmentDate}</td>
<td>{patient.appointmentTime}</td>
    <td>{patient.floor}</td>
    <td>{patient.roomNumber}</td>

    

    <td>{patient.status}</td>

    <td>

<FaEdit

className="edit-icon"

onClick={()=>editAppointment(patient)}

/>

</td>

</tr>

))}

</tbody>
      </table>


     {showModal && (
  <div className="modal">
    <div className="modal-content appointment-modal">

      <h2>Edit Appointment</h2>

      <div className="form-grid">

        <div className="input-group">
          <label>Doctor</label>
          <input
            type="text"
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Appointment Time</label>
          <input
            type="time"
            name="appointmentTime"
            value={appointment.appointmentTime}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Floor</label>
          <input
            type="number"
            name="floor"
            value={appointment.floor}
            onChange={handleChange}
            placeholder="Floor"
          />
        </div>

        <div className="input-group">
          <label>Room Number</label>
          <input
            type="number"
            name="roomNumber"
            value={appointment.roomNumber}
            onChange={handleChange}
            placeholder="Room Number"
          />
        </div>

        <div className="input-group">
          <label>Status</label>

          <select
            name="status"
            value={appointment.status}
            onChange={handleChange}
          >
            <option value="Waiting">Waiting</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

      </div>

      <div className="modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
          className="save-btn"
          onClick={updateAppointment}
        >
          Update Appointment
        </button>

      </div>

    </div>
  </div>
)}
    </div>
  );
}

export default AppointmentList;