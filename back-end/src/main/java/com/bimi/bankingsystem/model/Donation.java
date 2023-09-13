package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table (name = "donation")
public class Donation {
    @Setter(AccessLevel.PROTECTED)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)

    @NonNull
    private long id;
    @NonNull
    private String fullName;
    @NonNull
    private String email;
    @NonNull
    private Integer phoneNumber;
    @NonNull
    private String address;
    @NonNull
    private double donationAmount;
    @NonNull
    private int cardInformation;
    @NonNull
    private String comment;

    public Donation() {
    }

    public Donation(@NonNull long id, @NonNull String fullName, @NonNull String email, @NonNull Integer phoneNumber, @NonNull String address, @NonNull double donationAmount, @NonNull int cardInformation, @NonNull String comment) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.donationAmount = donationAmount;
        this.cardInformation = cardInformation;
        this.comment = comment;
    }
}
