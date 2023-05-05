package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Cards;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CardsRepository extends JpaRepository<Cards, Integer> {

    Optional<Cards> findBycvc(int cvc);

    void deleteBycvc(int cvc);
}
