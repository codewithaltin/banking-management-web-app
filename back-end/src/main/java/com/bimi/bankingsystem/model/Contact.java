package com.bimi.bankingsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.*;
@Entity
@Table
public class Contact {
    @Id
    @SequenceGenerator(name = "contact_sequence", sequenceName = "contact_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contact_sequence")
    @Column(updatable = false)
    private long id;
    private String fullName;
    private String email;
    private String text;


    public Contact(long id,String fullName, String email, String text){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.text = text;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }


    public Contact(){

    }


}
