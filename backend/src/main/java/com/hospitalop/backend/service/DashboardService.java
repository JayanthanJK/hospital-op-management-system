package com.hospitalop.backend.service; 
import com.hospitalop.backend.repository.PatientRepository; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;
 @Service 
 public class DashboardService 
 { @Autowired private PatientRepository patientRepository; 
 // Total number of patients 
  public long getTotalPatients() 
  { return patientRepository.count(); } 
  }