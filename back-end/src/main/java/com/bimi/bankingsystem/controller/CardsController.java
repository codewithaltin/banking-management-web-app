package com.bimi.bankingsystem.controller;


import com.bimi.bankingsystem.model.Cards;
import com.bimi.bankingsystem.service.CardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cards")
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


    @PutMapping("cards/{cvc}")
    public Cards updateCards(@RequestBody Cards cards) {
        return cardService.updateCards(cards);
    }

    @DeleteMapping("cards/{cvc}")
    public void deleteCards(@PathVariable("cvc") int cvc) {
        cardService.deleteCards(cvc);
    }

}
