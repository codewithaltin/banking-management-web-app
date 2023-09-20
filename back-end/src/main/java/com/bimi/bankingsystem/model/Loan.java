package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "loan")
public class Loan {
    @Setter(AccessLevel.PROTECTED)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    @NonNull
    private long id;
    @NonNull
    private String fullName;
    @NonNull
    private String email;
    @NonNull
    private Integer phoneNumber;
    @NonNull
    private String address;
    @NonNull
    private double loanAmount;
    @NonNull
    private double monthlyIncome;
    @NonNull
    private String purpouse;

    @ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;
    public User getUser() {
        return user;
    }

    public void assignUserToLoan(User user){
        this.user = user;
    }
}