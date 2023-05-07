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
    public Optional<Cards> findById(int id) {
        return cardsRepository.findById(id);
    }


    @Override
    public Cards saveCards(Cards card) {
        return cardsRepository.save(card);
    }

    @Override
    public Cards updateCards(Integer id, Cards card) {
        Cards cardObj = cardsRepository.findById(id).get();
        cardObj.setName(card.getName());
        cardObj.setCardNumber(card.getCardNumber());
        cardObj.setCvc(card.getCvc());
        cardObj.setValid(card.getValid());

        return cardsRepository.save(cardObj);
    }

    @Override
    public void deleteCards(int id) {
        cardsRepository.deleteById(id);
    }
}
