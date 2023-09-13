package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table (name = "loan")
public class Loan {
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
    private double loanAmount;
    @NonNull
    private double monthlyIncome;
    @NonNull
    private String purpouse;

    public Loan() {
    }

    public Loan(@NonNull long id, @NonNull String fullName, @NonNull String email, @NonNull Integer phoneNumber, @NonNull String address, @NonNull double loanAmount, @NonNull double monthlyIncome, @NonNull String purpouse) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.loanAmount = loanAmount;
        this.monthlyIncome = monthlyIncome;
        this.purpouse = purpouse;
    }
}