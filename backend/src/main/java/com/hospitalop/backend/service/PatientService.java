package com.hospitalop.backend.service;

import com.hospitalop.backend.entity.Patient;
import com.hospitalop.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;


    public List<Patient> searchPatients(String keyword) {

        return patientRepository.searchPatients(keyword);

    }

    public Patient savePatient(Patient patient) {

    long count = patientRepository.count() + 1;

    String opNumber = String.format("OP%03d", count);

    patient.setOpNumber(opNumber);

    return patientRepository.save(patient);
}

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
    }
 
      public Patient updateAppointment(Long id, Patient updatedPatient) {

    Patient patient = patientRepository.findById(id).orElse(null);

    if (patient != null) {

        patient.setDoctor(updatedPatient.getDoctor());
        patient.setAppointmentDate(updatedPatient.getAppointmentDate());
        patient.setAppointmentTime(updatedPatient.getAppointmentTime());
        patient.setFloor(updatedPatient.getFloor());
        patient.setRoomNumber(updatedPatient.getRoomNumber());
        patient.setStatus(updatedPatient.getStatus());

        return patientRepository.save(patient);
    }

    return null;
}


    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }
}