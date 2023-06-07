package com.bimi.bankingsystem.model;
import jakarta.persistence.*;

@Entity
@Table (name = "loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loan_id")
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
    private double loanAmount;

    @Column(name = "income")
    private double monthlyIncome;

    @Column(name = "purpouse")
    private String purpouse;

    public Loan() {
    }

    public Loan(Integer id, String fullName, String email, Integer phoneNumber, String adress, double loanAmount, double monthlyIcome, String purpouse) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = adress;
        this.loanAmount = loanAmount;
        this.monthlyIncome = monthlyIcome;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(double monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public String getPurpouse() {
        return purpouse;
    }

    public void setPurpouse(String purpouse) {
        this.purpouse = purpouse;
    }
}