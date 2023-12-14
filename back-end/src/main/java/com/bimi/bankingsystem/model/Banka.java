package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "banka")
public class Banka {
    @Id
    @SequenceGenerator(name = "banka_sequence", sequenceName = "banka_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "banka_sequence")
    @Column(updatable = false)
    private long id;

    @Column
    private String name;

    public Banka(){}

    public Banka(long id,String name) {
        this.id = id;
        this.name = name;
    }

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="banka",fetch = FetchType.LAZY)
    private List<Personi> personat;
    public List<Personi> getPersonat() {
        return personat;
    }
    public void addPersoni(Personi personi){
        personat.add(personi);
    }
    public void deletePersoni(Personi personi) {
    }

}

