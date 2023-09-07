package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table ( name="user")

public class User {
    @Setter(AccessLevel.PROTECTED) @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String emailId;
    @NonNull
    private String phoneNumber;
    @NonNull
    private String password;
    @NonNull
    private double balance;
    @NonNull
    private String role;

<<<<<<< HEAD
    public User(long id, String firstName, String lastName, String email, String phoneNumber, String password,String role) {
=======
    public Set<SavingGoal> getSavingGoals() {
        return savingGoals;
    }

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<SavingGoal> savingGoals;



    public User(long id, String firstName, String lastName, String emailId, String phoneNumber, String password,String role) {
>>>>>>> f3177e905e0e03a3b4f0e65f81587dd7eb450432
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
    }
    public User(){
        role = "USER";
    }

    public void addSavingGoals(SavingGoal savingGoal) {
        savingGoals.add(savingGoal);
        savingGoal.setUser(this);
    }

}