package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "ndertesa")
public class Ndertesa {
    @Id
    @SequenceGenerator(name="course_sequence",sequenceName = "course_sequence",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "course_sequence")
    @Column(updatable = false)
    private long id;

    @Column
    private String name;

    @Column
    private String date;

    public Ndertesa(){}

    public Ndertesa(long id, String name, String date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="ndertesa",fetch = FetchType.LAZY)
    private List<Ashensori> ashensorat;
    public List<Ashensori> getPersonat() {
        return ashensorat;
    }
    public void addAshensori(Ashensori ashensori){
        ashensorat.add(ashensori);
    }
    public void deleteAshensori(Ashensori ashensori) {
    }

}

