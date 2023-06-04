package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "Money Requested")
public class RequestMoney {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String personsRequestingEmail;
    @NonNull
    @Column
    private String payeeEmail;

    @NonNull
    @Column
    private double amount ;

    public RequestMoney(@NonNull long id, @NonNull String personsRequestingEmail, @NonNull String payeeEmail, @NonNull double amount) {
        this.id = id;
        this.personsRequestingEmail = personsRequestingEmail;
        this.payeeEmail = payeeEmail;
        this.amount = amount;
    }

    public RequestMoney() {
    }
}
