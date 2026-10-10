package com.hospitalop.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "doctors")
@Data
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String doctorName;

    private String specialization;

    private String department;

    private String qualification;

    private Integer experience;

    private Integer floor;

    private Integer roomNumber;

    @Column(unique = true)
    private String mobileNumber;

    private String email;

    private String status;
    
}