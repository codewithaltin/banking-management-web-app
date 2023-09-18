package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "mobile_payment")
public class MobilePayment {
    @Id
    @SequenceGenerator(name="mobilePayment_sequence",sequenceName = "mobilePayment_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "mobilePayment_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String serviceProvider;

    @NonNull
    @Column
    private int numberCode;
    @NonNull
    @Column
    private int phoneNumber;

    @NonNull
    @Column
    private int amount;



    public MobilePayment() {

    }

    public MobilePayment(@NonNull long id, @NonNull String serviceProvider, @NonNull int numberCode, @NonNull int phoneNumber, @NonNull int amount) {
        this.id = id;
        this.serviceProvider = serviceProvider;
        this.numberCode = numberCode;
        this.phoneNumber = phoneNumber;
        this.amount = amount;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
    public User getUser() {
        return user;
    }
    public void assignUserToMobilePayment(User user){
        this.user = user;
    }

}

