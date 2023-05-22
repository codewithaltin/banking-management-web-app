package com.bimi.bankingsystem.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

@Table ( name="employee")
public class EmployeeEntity {
    @Setter(AccessLevel.PROTECTED) @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String department;
    private String jobTitle;
    private String salary;
    private String startDate;
    private String endDate;

    public EmployeeEntity(long id, String firstName, String lastName, String email, String phoneNumber, String address, String department, String jobTitle, String salary, String startDate, String endDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.department = department;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}
