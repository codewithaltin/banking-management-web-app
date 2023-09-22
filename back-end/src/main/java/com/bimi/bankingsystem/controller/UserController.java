package com.bimi.bankingsystem.controller;


import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.UserRepository;
import com.bimi.bankingsystem.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class UserController {

    private final UserService userService;
    private UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping("/user")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/cities")
    public String[] getAllCities() {
        return userService.getCities();
    }
    @GetMapping("/roles")
    public String[] getRoles() {
        return userService.getRoles();
    }
    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }
    @GetMapping("/userbyemail/{email}")
    public Optional<User> getUserByEmail(@PathVariable("email") String email) {
        return userService.getUserByEmail(email);
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteEmployee(@PathVariable("id") Long id) {
        return userService.deleteUser(id);
    }

    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable("id") Long id,
                           @RequestBody User user) {
        return userService.updateUser(id,user);
    }

    @GetMapping("/user/checkEmail")
    public ResponseEntity<?> checkEmailUnique(@RequestParam String email) {
        boolean isEmailUnique = !userRepository.existsByEmail(email);
        return ResponseEntity.ok(isEmailUnique);
    }

    // Check account number uniqueness
    @GetMapping("/user/checkAccountNumber")
    public ResponseEntity<?> checkAccountNumberUnique(@RequestParam Long accountNumber) {
        boolean isAccountNumberUnique = !userRepository.existsByAccountNumber(accountNumber);
        return ResponseEntity.ok(isAccountNumberUnique);
    }

}



