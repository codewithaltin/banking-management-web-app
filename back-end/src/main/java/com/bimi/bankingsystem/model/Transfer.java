package com.bimi.bankingsystem.model;

public class Transfer {

    private long id;
    private String firstName;
    private String lastName;
    private long accountNumber;

    private int amount;

    private String date;

    private long reciverAccountNumber;

    private String city;
    private String country;

    private int postCode;

    private String description;

    public Transfer(long id, String firstName, String lastName, long accountNumber, int amount, String date,
                    long reciverAccountNumber, String city, String country, int postCode, String description) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.date = date;
        this.reciverAccountNumber = reciverAccountNumber;
        this.city = city;
        this.country = country;
        this.postCode = postCode;
        this.description = description;
    }
    public Transfer() {
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
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
