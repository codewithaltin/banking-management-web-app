package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Table(name = "subscribtion")
public class Subscribtion {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;
    @Column
    @NonNull
    private String name;
    @NonNull
    private String price;

    private double fee;
    @Column
    private long productId;
    @Column
    private long planId;

    public Subscribtion() {
    }
}
