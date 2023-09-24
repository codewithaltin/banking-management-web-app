package com.bimi.bankingsystem.model;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
    @Table(name = "futur_plus")
public class FuturPlus {
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
    private String cardInformation;

    @ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public User getUser() {
        return user;
    }
    public void assignUserToFuturPlus(User user){
        this.user = user;
    }


}
