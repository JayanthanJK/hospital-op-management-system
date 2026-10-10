import { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import "../styles/DoctorManagement.css";

function DoctorManagement() {

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [doctors, setDoctors] = useState([]);

  const [doctor, setDoctor] = useState({
    doctorName: "",
    specialization: "",
    department: "",
    qualification: "",
    experience: "",
    floor: "",
    roomNumber: "",
    mobileNumber: "",
    email: "",
    status: "Available"
  });

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/doctors"
      );

      setDoctors(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });
  };


const editDoctor = (doctorData) => {

  setDoctor({
    doctorName: doctorData.doctorName,
    specialization: doctorData.specialization,
    department: doctorData.department,
    qualification: doctorData.qualification,
    experience: doctorData.experience,
    floor: doctorData.floor,
    roomNumber: doctorData.roomNumber,
    mobileNumber: doctorData.mobileNumber,
    email: doctorData.email,
    status: doctorData.status
  });

  setEditingId(doctorData.id);

  setShowModal(true);

};


  const saveDoctor = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/doctors",
        doctor
      );

      alert("Doctor Added Successfully");

      loadDoctors();

      setDoctor({
        doctorName: "",
        specialization: "",
        department: "",
        qualification: "",
        experience: "",
        floor: "",
        roomNumber: "",
        mobileNumber: "",
        email: "",
        status: "Available"
      });

      setShowModal(false);

    } catch (error) {

      console.log(error);

      alert("Failed to Save Doctor");

    }

  };


  const updateDoctor = async () => {

  try {

    await axios.put(
      `http://localhost:8080/api/doctors/${editingId}`,
      doctor
    );

    alert("Doctor Updated Successfully");

    loadDoctors();

    setEditingId(null);

    setShowModal(false);

  } catch (error) {

    console.log(error);

  }

};

  const deleteDoctor = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this doctor?"
  );

  if (!confirmDelete) return;

  try {

    await axios.delete(
      `http://localhost:8080/api/doctors/${id}`
    );

    alert("Doctor Deleted Successfully");

    loadDoctors();

  } catch (error) {

    console.log(error);

    alert("Delete Failed");

  }

};

  return (

    <div className="page-container">

      <div className="header-section">

        <h1>Doctor Management</h1>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Doctor
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Floor</th>
            <th>Room Number</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Edit</th>
            
            <th>Delete</th>
          </tr>

        </thead>

        <tbody>

          {doctors.map((doctor) => (

            <tr key={doctor.id}>

              <td>{doctor.doctorName}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.floor}</td>
              <td>{doctor.roomNumber}</td>
              <td>{doctor.mobileNumber}</td>
              <td>{doctor.status}</td>

              <td>

  <FaEdit
      className="edit-icon"
      onClick={() => editDoctor(doctor)}
  />

</td>

              <td>

        <FaTrash
            className="delete-icon"
            onClick={() => deleteDoctor(doctor.id)}
        />

    </td>

            </tr>

          ))}

        </tbody>

      </table>

      {showModal && (

        <div className="modal">

          <div className="modal-content">

            <h2>Add New Doctor</h2>

            <div className="form-grid">

              <input
                type="text"
                name="doctorName"
                placeholder="Doctor Name"
                value={doctor.doctorName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={doctor.specialization}
                onChange={handleChange}
              />

              <input
                type="text"
                name="department"
                placeholder="Department"
                value={doctor.department}
                onChange={handleChange}
              />

              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={doctor.qualification}
                onChange={handleChange}
              />

              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={doctor.experience}
                onChange={handleChange}
              />

              <input
                type="text"
                name="floor"
                placeholder="Floor"
                value={doctor.floor}
                onChange={handleChange}
              />

              <input
                type="text"
                name="roomNumber"
                placeholder="Room Number"
                value={doctor.roomNumber}
                onChange={handleChange}
              />

              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={doctor.mobileNumber}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={doctor.email}
                onChange={handleChange}
              />

              <select
                name="status"
                value={doctor.status}
                onChange={handleChange}
              >
                <option>Available</option>
                <option>Busy</option>
                <option>On Leave</option>
              </select>

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
  onClick={editingId ? updateDoctor : saveDoctor}
>
  {editingId ? "Update Doctor" : "Save Doctor"}
</button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default DoctorManagement;