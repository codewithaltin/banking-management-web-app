package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Cards;

import java.util.List;
import java.util.Optional;

public interface CardService {
    List<Cards> findAllCards();

    Optional<Cards> findBycvc(int cvc);

    Cards saveCards(Cards card);

    Cards updateCards(Cards card);

    void deleteCards(int cvc);
}




