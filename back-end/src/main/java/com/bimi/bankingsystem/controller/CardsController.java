package com.bimi.bankingsystem.controller;


import com.bimi.bankingsystem.model.Cards;
import com.bimi.bankingsystem.service.CardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class CardsController {

    private final CardService cardService;

    public CardsController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping("/cards")
    public Cards saveCards(@RequestBody Cards cards) {
        return cardService.saveCards(cards);
    }

    @GetMapping("/cards")
    public List<Cards> findAllCards() {
        return cardService.findAllCards();
    }

    @GetMapping("/cards/{id}")
    public Optional<Cards> findCardsByID(@PathVariable ("id") int id) {
        return cardService.findById(id);
    }


    @PutMapping("/cards/{id}")
    public Cards updateCards(@PathVariable Integer id, @RequestBody Cards cards) {
        return cardService.updateCards(id, cards);
    }

    @DeleteMapping("/cards/{id}")
    public void deleteCards(@PathVariable("id") int id) {
        cardService.deleteCards(id);
    }

}
