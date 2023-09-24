package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "collector_payment")
public class CollectorPayment {
    @Id
    @SequenceGenerator(name="collectorPayment_sequence",sequenceName = "collectorPayment_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "collectorPayment_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String collector;

    @NonNull
    @Column
    private int serialNo;
    @NonNull
    @Column
    private String uniref;

    @NonNull
    @Column
    private int amount;

    @NonNull
    @Column
    private String description;


    public CollectorPayment() {

    }

    public CollectorPayment(@NonNull long id, @NonNull String collector, @NonNull int serialNo, @NonNull String uniref, @NonNull int amount, @NonNull String description) {
        this.id = id;
        this.collector = collector;
        this.serialNo = serialNo;
        this.uniref = uniref;
        this.amount = amount;
        this.description = description;
    }

    @ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
    public User getUser() {
        return user;
    }
    public void assignUserToCollectorPayment(User user){
        this.user = user;
    }

}




