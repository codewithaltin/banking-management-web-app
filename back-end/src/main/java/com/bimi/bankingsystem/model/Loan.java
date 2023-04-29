package com.bimi.bankingsystem.model;
import jakarta.persistence.*;

@Entity
@Table
public class Loan {
    private Integer id;
    private String fullName;
    private String email;
    private Integer phoneNumber;
    private String adress;
    private double loanAmount;
    private double monthlyIcome;
    private String purpouse;

    public Loan() {
    }

    public Loan(Integer id, String fullName, String email, Integer phoneNumber, String adress, double loanAmount, double monthlyIcome, String purpouse) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
        this.loanAmount = loanAmount;
        this.monthlyIcome = monthlyIcome;
        this.purpouse = purpouse;
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

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getMonthlyIcome() {
        return monthlyIcome;
    }

    public void setMonthlyIcome(double monthlyIcome) {
        this.monthlyIcome = monthlyIcome;
    }

    public String getPurpouse() {
        return purpouse;
    }

    public void setPurpouse(String purpouse) {
        this.purpouse = purpouse;
    }
}
