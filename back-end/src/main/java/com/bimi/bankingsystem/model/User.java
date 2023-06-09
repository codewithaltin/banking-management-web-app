package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
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

    public User(){

    }
}