package com.bimi.bankingsystem.repository;


import com.bimi.bankingsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
//    @Query("Select user from User user where user.email=:email and user.password=:password")
    Optional<User> findByEmailAndPassword(String email,String password);

    Optional<User> findByEmail(String email);
}

