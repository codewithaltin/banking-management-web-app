package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "pre_paid_payment")
public class PrePaidPayment {
    @Id
    @SequenceGenerator(name="prePaidPayment_sequence",sequenceName = "prePaidPayment_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "prePaidPayment_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String operator;


    @NonNull
    @Column
    private String product;

    @NonNull
    @Column
    private int amount;



    public PrePaidPayment() {

    }

    public PrePaidPayment(@NonNull long id, @NonNull String operator, @NonNull String product, @NonNull int amount) {
        this.id = id;
        this.operator = operator;
        this.product = product;
        this.amount = amount;
    }
}

