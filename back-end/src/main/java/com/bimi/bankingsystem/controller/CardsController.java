package com.bimi.bankingsystem.controller;


import com.bimi.bankingsystem.model.Cards;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.CardService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class CardsController {

    private final CardService cardService;
    private UserServiceImpl userService;

    public CardsController(CardService cardService, UserServiceImpl userService) {
        this.cardService = cardService;
        this.userService = userService;
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


    @PostMapping("/cards/user/{email}")
    public ResponseEntity<String> applyForCard(@PathVariable String email) {
        // Check if the user already has a card

        User user = userService.getUserByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        Cards existingCard = user.getCard();
        if (existingCard != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already has a card");
        }

        // Create a new card for the user
        Cards newCard = new Cards();
        newCard.assignUserToCard(user);

        // Save the card
        cardService.saveCards(newCard);

        return ResponseEntity.status(HttpStatus.CREATED).body("Card created successfully");
    }

}
