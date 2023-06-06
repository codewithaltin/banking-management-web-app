package com.bimi.bankingsystem.model;
import jakarta.persistence.*;

@Entity
@Table (name = "beneficiary")
public class Beneficiary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "surname")
    private String surname;

    @Column(name = "secondName")
    private String secondName;

    @Column(name = "middleName")
    private String middleName;

    @Column(name = "secondSurname")
    private String secondSurname;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

    @Column(name = "relatedPerson")
    private String relatedPerson;

    @Column(name = "postalCode")
    private Integer postalCode;

    @Column(name = "date")
    private String date;

    @Column(name = "address")
    private String address;

    @Column(name = "percentage")
    private Integer percentage;

    public Beneficiary () {

    }

    public Beneficiary(String firstName, String surname, String secondName, String middleName, String secondSurname, String email, String gender, String country, String city, String relatedPerson, Integer postalCode, String date, String address, Integer percentage) {
        this.firstName = firstName;
        this.surname = surname;
        this.secondName = secondName;
        this.middleName = middleName;
        this.secondSurname = secondSurname;
        this.email = email;
        this.gender = gender;
        this.country = country;
        this.city = city;
        this.relatedPerson = relatedPerson;
        this.postalCode = postalCode;
        this.date = date;
        this.address = address;
        this.percentage = percentage;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSecondSurname() {
        return secondSurname;
    }

    public void setSecondSurname(String secondSurname) {
        this.secondSurname = secondSurname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRelatedPerson() {
        return relatedPerson;
    }

    public void setRelatedPerson(String relatedPerson) {
        this.relatedPerson = relatedPerson;
    }

    public Integer getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(Integer postalCode) {
        this.postalCode = postalCode;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPercentage() {
        return percentage;
    }

    public void setPercentage(Integer percentage) {
        this.percentage = percentage;
    }

}
