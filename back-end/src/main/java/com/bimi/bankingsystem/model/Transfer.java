package com.bimi.bankingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "transfer")
public class Transfer {

    @Id
    @SequenceGenerator(name =   "transfer_sequence", sequenceName = "transfer_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transfer_sequence")
    @Column(updatable = false)
    private long id;

    private long accountNumber;

    private int amount;

    private String date;

    private long reciverAccountNumber;

    private String city;
    private String country;

    private int postCode;

    private String description;

    public Transfer(long id, long accountNumber, int amount, String date,
                    long reciverAccountNumber, String city, String country, int postCode, String description) {
        this.id = id;

        this.accountNumber = accountNumber;
        this.amount = amount;
        this.date = date;
        this.reciverAccountNumber = reciverAccountNumber;
        this.city = city;
        this.country = country;
        this.postCode = postCode;
        this.description = description;
    }


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
    public User getUser() {
        return user;
    }
    public void assignUserToTransfer(User user){
        this.user = user;
    }


    public Transfer() {
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getAccountNumber() {
        return accountNumber;
    }
    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public long getReciverAccountNumber() {
        return reciverAccountNumber;
    }
    public void setReciverAccountNumber(long reciverAccountNumber) {
        this.reciverAccountNumber = reciverAccountNumber;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public int getPostCode() {
        return postCode;
    }
    public void setPostCode(int postCode) {
        this.postCode = postCode;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
