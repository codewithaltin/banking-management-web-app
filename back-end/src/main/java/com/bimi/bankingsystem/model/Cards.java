package com.bimi.bankingsystem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cards")
public class Cards {

    @Id
    @SequenceGenerator(name = "client_sequence", sequenceName = "client_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_sequence")
    @Column(updatable = false)
    private int id;


    @Column(name = "cvc")
    private int cvc;

    @Column(name = "card_Number")
    private String cardNumber;

    @Column(name = "name")
    private String name;

    @Column(name = "valid")
    private int valid;


    public Cards() {
    }


    public Cards(String cardNumber, String name, int valid, int cvc) {
        this.cvc = cvc;
        this.cardNumber = cardNumber;
        this.name = name;
        this.valid = valid;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValid() {
        return valid;
    }

    public void setValid(int valid) {
        this.valid = valid;
    }

    public int getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }
}
