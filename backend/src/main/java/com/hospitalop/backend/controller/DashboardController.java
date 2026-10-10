package com.hospitalop.backend.controller; 
import com.hospitalop.backend.service.DashboardService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
import java.util.HashMap; 
import java.util.Map; 
@RestController 
@RequestMapping("/api/dashboard") 
@CrossOrigin(origins = "http://localhost:5173") 
public class DashboardController 
{ 
    @Autowired 
    private DashboardService dashboardService; 
        @GetMapping 
        public Map<String, Long> getDashboardData() 
        { 
            Map<String, Long> dashboard = new HashMap<>(); 
            dashboard.put("totalPatients", dashboardService.getTotalPatients());
             // These are temporary values. // Later we will connect them to MySQL tables. 
              dashboard.put("totalDoctors", 0L); 
              dashboard.put("totalDepartments", 0L); 
              dashboard.put("totalAppointments", 0L); 
              return dashboard; } }