package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "institution_payments")
public class InstitutionPayment {
    @Id
    @SequenceGenerator(name="institutionPayment_sequence",sequenceName = "institutionPayment_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "institutionPayment_sequence")
    @Column(updatable = false)
    @NonNull
    private long id;

    @NonNull
    @Column
    private String institution;

    @NonNull
    @Column
    private String company;

    @NonNull
    @Column
    private String referenceNumber;

    @NonNull
    @Column
    private int amount;

    public InstitutionPayment() {

    }

    public InstitutionPayment(@NonNull long id, @NonNull String institution, @NonNull String company, @NonNull String referenceNumber, @NonNull int amount) {
        this.id = id;
        this.institution = institution;
        this.company = company;
        this.referenceNumber = referenceNumber;
        this.amount = amount;
    }

    @ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
    public User getUser() {
        return user;
    }
    public void assignUserToInstitutionPayment(User user){
        this.user = user;
    }

}


