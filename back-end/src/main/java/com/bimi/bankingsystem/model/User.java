package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table ( name="user")

public class User {
    @Setter(AccessLevel.PROTECTED) @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    @NonNull
    private long id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String email;
    @NonNull
    private String phoneNumber;
    @NonNull
    private String password;
    @NonNull
    private double balance;
    @NonNull
    private String role;

    public User(long id, String firstName, String lastName, String emailId, String phoneNumber, String password,String role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;

        this.role = role;
    }
    public User(){

    }
}