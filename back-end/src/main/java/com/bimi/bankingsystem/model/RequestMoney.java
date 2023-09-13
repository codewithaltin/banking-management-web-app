package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Table(name = "Money Requested")
public class RequestMoney {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;

    @NonNull
    @Column
    private String requestedEmail;
    @NonNull
    @Column
    private String payeeEmail;


    @Column
    private double amount ;


    public RequestMoney() {
    }
}
