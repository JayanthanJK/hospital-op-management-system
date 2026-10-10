package com.hospitalop.backend.service;

import com.hospitalop.backend.entity.Doctor;
import com.hospitalop.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    public Doctor updateDoctor(Long id, Doctor doctor) {

        Doctor existing = doctorRepository.findById(id).orElse(null);

        if(existing != null){

            existing.setDoctorName(doctor.getDoctorName());
            existing.setSpecialization(doctor.getSpecialization());
            existing.setDepartment(doctor.getDepartment());
            existing.setQualification(doctor.getQualification());
            existing.setExperience(doctor.getExperience());
            existing.setFloor(doctor.getFloor());
            existing.setRoomNumber(doctor.getRoomNumber());
            existing.setMobileNumber(doctor.getMobileNumber());
            existing.setEmail(doctor.getEmail());
            existing.setStatus(doctor.getStatus());

            return doctorRepository.save(existing);
        }

        return null;
    }

    public void deleteDoctor(Long id){
        doctorRepository.deleteById(id);
    }

}