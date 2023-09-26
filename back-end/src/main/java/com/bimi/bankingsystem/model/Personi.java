package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "personi")
public class Personi {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="banka_id", referencedColumnName = "id")
    private Banka banka;


    public Personi(long id,String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Banka getBanka() {
        return banka;
    }
    public void assignBanka(Banka user){
        this.banka = user;
    }
    public Personi(){}
}
