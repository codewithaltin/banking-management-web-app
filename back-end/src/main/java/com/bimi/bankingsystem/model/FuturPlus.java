package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "futur_plus")
public class FuturPlus {
    @Setter(AccessLevel.PROTECTED)
    @Id
    @SequenceGenerator(name="futurplus_sequence",sequenceName = "futurplus_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "futurplus_sequence")
    @Column(updatable = false)

    @NonNull
    private long id;

    @NonNull
    private String fullName;

    @NonNull
    private String email;

    @NonNull
    private Long cardInfo;

    public FuturPlus() {
    }

    public FuturPlus(@NonNull long id, @NonNull String fullName, @NonNull String email, @NonNull Long cardInfo) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.cardInfo = cardInfo;
    }
}
