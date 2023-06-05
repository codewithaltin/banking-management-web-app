package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "futur_plus")
public class FuturPlus {
    @Id
    @SequenceGenerator(name="futurplus_sequence",sequenceName = "futurplus_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "futurplus_sequence")
    @Column(updatable = false)
    private long id;

    @NonNull
    @Column
    private String fullName;

    @NonNull
    @Column
    private String email;

    @NonNull
    @Column
    private int cardInfo;

    public FuturPlus() {
    }

    public FuturPlus(long id, @NonNull String fullName, @NonNull String email, @NonNull int cardInfo) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.cardInfo = cardInfo;
    }
}
