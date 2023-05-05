package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Cards;
import com.bimi.bankingsystem.repository.CardsRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CardsImpl implements CardService{

    private final CardsRepository cardsRepository;

    public CardsImpl(CardsRepository cardsRepository) {
        this.cardsRepository = cardsRepository;
    }

    @Override
    public List<Cards> findAllCards() {
        return cardsRepository.findAll();
    }

    @Override
    public Optional<Cards> findBycvc(int cvc) {
        return cardsRepository.findBycvc(cvc);
    }


    @Override
    public Cards saveCards(Cards card) {
        return cardsRepository.save(card);
    }

    @Override
    public Cards updateCards(Cards card) {
        return cardsRepository.save(card);
    }

    @Override
    public void deleteCards(int cvc) {
        cardsRepository.deleteBycvc(cvc);
    }
}
