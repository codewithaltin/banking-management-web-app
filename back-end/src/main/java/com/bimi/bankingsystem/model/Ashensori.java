package com.bimi.bankingsystem.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "ashensori")
public class Ashensori {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;

    @Column
    private String pershkrim;

    @ManyToOne()
    @JoinColumn(name="ndertesa_id", referencedColumnName = "id")
    private Ndertesa ndertesa;


    public Ashensori(long id, String pershkrim) {
        this.id = id;
        this.pershkrim = pershkrim;
    }

    public Ndertesa getNdertesa() {
        return ndertesa;
    }
    public void assignNdertesa(Ndertesa ndertesa){
        this.ndertesa = ndertesa;
    }
    public Ashensori(){}
}
