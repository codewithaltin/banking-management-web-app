package com.bimi.bankingsystem.model;

import com.bimi.bankingsystem.common.enums.City;
import com.bimi.bankingsystem.common.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
    @NonNull
    private String password;

    private double balance;

    @NonNull
    @Enumerated(EnumType.STRING)
    private City city;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<SavingGoal> savingGoals;


    public List<SavingGoal> getSavingGoals() {
        return savingGoals;
    }
    public void addSavingGoal(SavingGoal savingGoal){
        savingGoals.add(savingGoal);
    }

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