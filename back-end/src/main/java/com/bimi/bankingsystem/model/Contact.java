package com.bimi.bankingsystem.model;

import com.bimi.bankingsystem.model.User;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.*;
@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @SequenceGenerator(name =   "contact_sequence", sequenceName = "contact_sequence", allocationSize = 1)
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


    @ManyToOne()
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
    public User getUser(){return user;}
    public void assignUserToContact(User user){this.user = user;}



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


