package com.bimi.bankingsystem.model;


<<<<<<< HEAD
import jakarta.persistence.*;

=======
>>>>>>> 4b81ce4a99129fc72e1060046583204ee394d11d
public class Contact {

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
