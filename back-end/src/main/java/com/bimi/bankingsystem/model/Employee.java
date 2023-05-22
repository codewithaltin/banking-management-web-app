package com.bimi.bankingsystem.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String firstName;

    @NonNull
    @Column
    private String lastName;
    @NonNull
    @Column
    private String email;

    @NonNull
    @Column
    private String phoneNumber;

    @NonNull
    @Column
    private String address;

    @NonNull
    @Column
    private String department;

    @NonNull
    @Column
    private String jobTitle;

    @NonNull
    @Column
    private String salary;

    @NonNull
    @Column
    private String startDate;

    @NonNull
    @Column
    private String endDate;

    public Employee() {

    }

    public Employee(long id, String firstName, String lastName, String email, String phoneNumber, String address, String department, String jobTitle, String salary, String startDate, String endDate) {
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
