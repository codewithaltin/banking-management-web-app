package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "saving_goal")
public class SavingGoal {
    @Id
    @SequenceGenerator(name="savingGoal_sequence",sequenceName = "savingGoal_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "savingGoal_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String savingReason;

    @NonNull
    @Column
    private int amount;
    @NonNull
    @Column
    private String date;

    @NonNull
    @Column
    private String goalName;

    @NonNull
    @Column
    private String goalDescription;


    public SavingGoal() {

    }

    public SavingGoal(long id, String savingReason, int amount, String date, String goalName, String goalDescription) {
        this.id = id;
        this.savingReason = savingReason;
        this.amount = amount;
        this.date = date;
        this.goalName = goalName;
        this.goalDescription = goalDescription;
    }
}

