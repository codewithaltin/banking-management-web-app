package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Table(name = "movie")
public class Personi {
    @Id
    @SequenceGenerator(name = "personi_sequence", sequenceName = "personi_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "personi_sequence")
    @Column(updatable = false)
    private long id;


    @Column
    private String title;

    @Column
    private int releaseYear;

    @ManyToOne()
    @JoinColumn(name="director_id", referencedColumnName = "id")
    private Banka banka;


//    public Personi(long id,String firstName, String lastName) {
//        this.id = id;
//        this.firstName = firstName;
//        this.releaseYear = releaseYear;
//    }

    public Banka getBanka() {
        return banka;
    }
    public void assignBanka(Banka banka){
        this.banka = banka;
    }
    public Personi(){}
}
