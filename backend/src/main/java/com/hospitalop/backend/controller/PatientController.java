package com.hospitalop.backend.controller;

import com.hospitalop.backend.entity.Patient;
import com.hospitalop.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

    @Autowired
    private PatientService patientService;

    

    @PostMapping
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

     @GetMapping("/search")
    public List<Patient> searchPatients(
            @RequestParam String keyword) {

        return patientService.searchPatients(keyword);

    }


    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable Long id) {
        return patientService.getPatientById(id);
    }

    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
        return "Patient Deleted Successfully";
    }

    @PutMapping("/{id}/appointment")
public Patient updateAppointment(
        @PathVariable Long id,
        @RequestBody Patient patient) {

    return patientService.updateAppointment(id, patient);
}
}