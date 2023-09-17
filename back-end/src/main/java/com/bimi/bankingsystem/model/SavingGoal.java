package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Optional;

@Getter
@Setter
@Entity
@AllArgsConstructor
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

    public  SavingGoal(){

    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public User getUser() {
        return user;
    }
    public void assignUser(User user){
        this.user = user;
    }

}