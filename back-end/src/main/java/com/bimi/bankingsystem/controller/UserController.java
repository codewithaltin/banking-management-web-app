package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public List<User> getUserById(@PathVariable("id") Long id) {
        return userService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    public boolean deleteEmployee(@PathVariable("id") Long id) {
        return userService.deleteUser(id);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") Long id,
                                           @RequestBody User user) {
        return userService.updateUser(id,user);
    }

}