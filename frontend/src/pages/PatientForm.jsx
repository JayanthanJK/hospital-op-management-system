import { useState } from "react";
import axios from "axios";
import "../styles/PatientForm.css";

function PatientForm() {

  const [formData, setFormData] = useState({
    
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobileNumber: "",
    email: "",
    bloodGroup: "",
    address: "",
     city: "",
      state: "",
    symptoms: "",
    department: "",
    doctor: "",
    dateofBirth:"",
    appointmentDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/patients",
        formData
      );

      alert("OP Registration Submitted Successfully");

    } catch (error) {

      alert("Submission Failed");

    }

  };

  return (

    <div className="patient-container">

      <div className="patient-card">

        <div className="header">

          <h1>Hospital OP Registration</h1>

          <p>
            Complete your registration before visiting the hospital
          </p>

        </div>

        <form className="patient-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="input-group">

              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

             <div className="input-group">

              <label>Age</label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />

            </div>

          </div>

           

          <div className="form-row">

            <div className="input-group">

              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="input-group">

              <label>Blood Group</label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

            </div>

          </div>

          <div className="form-row">

            <div className="input-group">

              <label>Mobile Number</label>

              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="input-group">

            <label>Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            ></textarea>

          </div>
          <div className="form-row">

            <div className="input-group">

              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>State</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="input-group">

            <label>Symptoms / Health Issue</label>

            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

          </div>

          <div className="form-row">

            <div className="input-group">

              <label>Department</label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option>General Medicine</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
              </select>

            </div>

            <div className="input-group">

              <label>Doctor Preference</label>

              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
              />

            </div>

          </div>
             
             <div className="form-row">
          <div className="input-group">

            <label>Appointment Date</label>

            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Date Of Birth</label>

            <input
              type="date"
              name="dateofBirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
            />

          </div>

          </div>

          <button type="submit">
            Register OP Appointment
          </button>

        </form>

      </div>

    </div>

  );
}

export default PatientForm;