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

@Table ( name="users")
public class UserEntity {
    @Setter(AccessLevel.PROTECTED) @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String phoneNumber;
    private String password;
    private String role;

    public UserEntity(long id, String firstName, String lastName, String emailId, String phoneNumber, String password,String role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.password = password;

            this.role = role;
    }
}