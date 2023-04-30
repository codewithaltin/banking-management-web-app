package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.BankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final BankingService bankingService;

    public UserController(BankingService bankingService) {
        this.bankingService = bankingService;
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return bankingService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return bankingService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = null;
        user = bankingService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        boolean deleted = false;
        deleted = bankingService.deleteUser(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
                                           @RequestBody User user) {
        user = bankingService.updateUser(id,user);
        return ResponseEntity.ok(user);
    }

}