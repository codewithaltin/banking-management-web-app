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

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<SavingGoal> savingGoals;


    public Set<SavingGoal> getSavingGoals() {
        return savingGoals;
    }

    public User(){
        role = "USER";
    }

    public void addSavingGoals(SavingGoal savingGoal) {
        savingGoals.add(savingGoal);
        savingGoal.setUser(this);
    }

}