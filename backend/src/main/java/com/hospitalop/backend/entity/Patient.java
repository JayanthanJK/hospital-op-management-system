package com.hospitalop.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "patients")
@Data
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String opNumber;

    private String firstName;

    private String lastName;

    private Integer age;

    private String gender;

    @Column(unique = true)
    private String mobileNumber;

    private String email;

    @Column(length = 500)
    private String address;

    private String city;

    private String state;

    private String bloodGroup;

    private String department;

    private String dateofBirth;

    private LocalDate appointmentDate;

    // NEW
    private String appointmentTime;

    // NEW
    private Integer floor;

    // NEW
    private Integer roomNumber;

    // NEW
    private String status;

     private String doctor;

    private String symptoms;

    
}