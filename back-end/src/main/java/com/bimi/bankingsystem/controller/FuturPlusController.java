package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.FuturPlus;
import com.bimi.bankingsystem.service.FuturPlusService;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class FuturPlusController {
    private FuturPlusService futurPlusService;

    private UserServiceImpl userService;

    public FuturPlusController(FuturPlusService futurPlusService, UserServiceImpl userService) {
        this.futurPlusService = futurPlusService;
        this.userService = userService;
    }

    @PostMapping("/futurPlus")
    public FuturPlus saveFuturPlus(@RequestBody FuturPlus futurPlus){
        return futurPlusService.addFuturPlus(futurPlus);
    }

    @GetMapping("/futurPlus")
    public List<FuturPlus> getAllFuturPlus() {
        return futurPlusService.getFuturPlus();
    }

    @GetMapping("/futurPlus/{id}")
    public List<FuturPlus> getFuturPlusById(@PathVariable("id") Long id) {
        FuturPlus futurPlus = null;
        futurPlus = futurPlusService.getFuturPlusById(id);
        return futurPlusService.getFuturPlus();
    }

    @DeleteMapping("/futurPlus/{id}")
    public boolean deleteFuturPlus(@PathVariable Long id){
        return futurPlusService.deleteFuturPlus(id);
    }

    @PutMapping("/futurPlus/{id}")
    public FuturPlus updateFuturPlus(@PathVariable("id") Long id,@RequestBody FuturPlus futurPlus){
        return futurPlusService.updateFuturPlus(id,futurPlus);
    }

    @PostMapping("/futurPlus/user/{email}")
    public FuturPlus saveFuturPlusByUserId(@PathVariable String email, @RequestBody FuturPlus futurPlus){
        User user = userService.getUserByEmail(email).get();
        user.createFuturPlus(futurPlus);
        futurPlus.assignUserToFuturPlus(user);
        return futurPlusService.addFuturPlus(futurPlus);
    }

    @GetMapping("/futurPlus/user/{email}")
    public List<FuturPlus> getFuturPlusByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getFuturPluses();
    }
}
