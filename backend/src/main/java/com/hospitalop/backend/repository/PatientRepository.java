package com.hospitalop.backend.repository;

import com.hospitalop.backend.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {


     @Query("""
        SELECT p FROM Patient p
        WHERE LOWER(p.firstName) LIKE LOWER(CONCAT('%', :keyword, '%'))
        OR LOWER(p.lastName) LIKE LOWER(CONCAT('%', :keyword, '%'))
        OR LOWER(p.opNumber) LIKE LOWER(CONCAT('%', :keyword, '%'))
        """)
    List<Patient> searchPatients(@Param("keyword") String keyword);

}