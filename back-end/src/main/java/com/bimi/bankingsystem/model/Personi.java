package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Table(name = "personi")
public class Personi {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;


    @Column
    private String emri_212256001;


    @Column
    private String mbiemri_212256001;


    @ManyToOne()
    @JoinColumn(name="personi_id", referencedColumnName = "id")
    private Banka banka;

    public Banka getBanka() {
        return banka;
    }

    public void setBanka(Banka banka) {
        this.banka = banka;
    }



    public Personi() {
    }
}
