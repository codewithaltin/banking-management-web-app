package com.bimi.bankingsystem.model;
import jakarta.persistence.*;

@Entity
@Table (name = "\"invoice\"")
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "invoice_id")
    private Integer id;

    @Column(name = "address")
    private String address;

    @Column(name = "name")
    private String fullName;

    @Column(name = "country")
    private String country;

    @Column(name = "postCode")
    private Integer postCode;

    @Column(name = "email")
    private String email;

    @Column(name = "emailBill")
    private String emailBill;

    @Column(name = "date")
    private String date;

    @Column(name = "item")
    private String item;

    @Column(name = "price")
    private Integer price;

    @Column(name = "qty")
    private Integer qty;

    @Column(name = "note")
    private String note;

    public Invoice () {

    }

    public Invoice(Integer id, String fullName, String country, Integer postCode, String email, String emailBill, String date, String item, Integer price, Integer qty, String note) {
        this.id = id;
        this.address = address;
        this.fullName = fullName;
        this.country = country;
        this.postCode = postCode;
        this.email = email;
        this.emailBill = emailBill;
        this.date = date;
        this.item = item;
        this.price = price;
        this.qty = qty;
        this.note = note;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getPostCode() {
        return postCode;
    }

    public void setPostCode(Integer postCode) {
        this.postCode = postCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailBill() {
        return emailBill;
    }

    public void setEmailBill(String emailBill) {
        this.emailBill = emailBill;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}


