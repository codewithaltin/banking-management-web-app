package com.bimi.bankingsystem.model;

import com.bimi.bankingsystem.common.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@Getter
@Setter
@Table ( name="user")

public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private long id;

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

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private Set<SavingGoal> savingGoals;


    @Enumerated(EnumType.STRING)
    private Role role;

    public User(){
    }

    public void addSavingGoals(SavingGoal savingGoal) {
        savingGoals.add(savingGoal);
        savingGoal.setUser(this);
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