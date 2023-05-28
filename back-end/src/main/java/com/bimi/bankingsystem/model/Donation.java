package com.bimi.bankingsystem.model;
import jakarta.persistence.*;

@Entity
@Table (name = "\"donation\"")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private Integer phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "amount")
    private double donationAmount;

    @Column(name = "cardInfo")
    private int cardInformation;

    @Column(name = "comment")
    private String comment;

    public Donation() {
    }

    public Donation(Integer id, String fullName, String email, Integer phoneNumber, String address, double donationAmount, int cardInformation, String comment) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.donationAmount = donationAmount;
        this.cardInformation = cardInformation;
        this.comment = comment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getDonationAmount() {
        return donationAmount;
    }

    public void setDonationAmount(double donationAmount) {
        this.donationAmount = donationAmount;
    }

    public int getCardInformation() {
        return cardInformation;
    }

    public void setCardInformation(int cardInformation) {
        this.cardInformation = cardInformation;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
