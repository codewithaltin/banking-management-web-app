package com.bimi.bankingsystem.model;

import com.bimi.bankingsystem.common.enums.City;
import com.bimi.bankingsystem.common.enums.Role;
import com.bimi.bankingsystem.service.RequestMoneyService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

import org.apache.coyote.Request;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.imageio.plugins.jpeg.JPEGImageReadParam;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@Table ( name="user")

public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private long id;

    @NonNull
    private String firstName;

    private String lastName;
    @NonNull
    private String email;

    private long accountNumber;
    @NonNull
    private String phoneNumber;

    private String password;

    private double balance;

    @NonNull
    @Enumerated(EnumType.STRING)
    private City city;

    @JsonIgnore
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.EAGER)
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<SavingGoal> savingGoals;

    public List<SavingGoal> getSavingGoals() {
        return savingGoals;
    }
    public void addSavingGoal(SavingGoal savingGoal){
        savingGoals.add(savingGoal);
    }
    public void deleteSavingGoal(SavingGoal savingGoal){

    }

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<RequestMoney> requestedMoney;

    public List<RequestMoney> getRequestedMoney() {
        return requestedMoney;
    }

    public void addRequestMoney(RequestMoney r){
        requestedMoney.add(r);
    }

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<Transfer> transfers;
    public List<Transfer> getTransfers() {
        return transfers;
    }
    public void addTransfer(Transfer transfer){
        transfers.add(transfer);
    }



    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)
    private List<Contact> contacts;
    public List<Contact> getContacts() {
        return contacts;
    }
    public void addContact(Contact contact){
        contacts.add(contact);
    }



    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)
    private List<InstitutionPayment> institutionPayments;
    public List<InstitutionPayment> getInstitutionPayments() {
        return institutionPayments;
    }
    public void addInstitutionPayment(InstitutionPayment institutionPayment){
        institutionPayments.add(institutionPayment);
    }




    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)
    private List<MobilePayment> mobilePayments;
    public List<MobilePayment> getMobilePayments() {
        return mobilePayments;
    }
    public void addMobilePayment(MobilePayment mobilePayment){
        mobilePayments.add(mobilePayment);
    }


    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)
    private List<PrePaidPayment> prePaidPayments;
    public List<PrePaidPayment> getPrePaidPayments() {
        return prePaidPayments;
    }
    public void addPrePaidPayment(PrePaidPayment prePaidPayment){
        prePaidPayments.add(prePaidPayment);
    }

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<CollectorPayment> collectorPayments;
    public List<CollectorPayment> getCollectorPayments() {
        return collectorPayments;
    }
    public void addCollectorPayment(CollectorPayment collectorPayment){
        collectorPayments.add(collectorPayment);
    }




    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<Donation> donations;
    public List<Donation> getDonations() {
        return donations;
    }
    public void createDonation(Donation donation){
        donations.add(donation);
    }


    @JsonIgnore
    @OneToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE},orphanRemoval = true,mappedBy="user",fetch = FetchType.LAZY)

    private List<Loan> loans;
    public List<Loan> getLoans() {
        return loans;
    }
    public void createLoan(Loan loan){
        loans.add(loan);
    }

    @OneToOne(mappedBy = "user")
    private Cards card;


    @Enumerated(EnumType.STRING)
    private Role role;


    public User(){
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }





    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}