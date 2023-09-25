package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Donation;
import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.service.LoanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.UserServiceImpl;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth")
public class LoanController {
    private LoanService loanService;

    private UserServiceImpl userService;

    public LoanController(LoanService loanService, UserServiceImpl userService) {
        this.loanService=loanService;
        this.userService = userService;
    }

    @PostMapping("/loan")
    public Loan createLoan(@RequestBody Loan loan){
        return loanService.createLoan(loan);
    }

    @GetMapping("/loan")
    public List<Loan> getAllLoans(){
        return loanService.getAllLoans();
    }

    @GetMapping("/loan/{id}") 
    public List<Loan> getLoanById(@PathVariable("id") Long id) {
        Loan loan = null;
        loan = loanService.getLoanById(id);
        return loanService.getAllLoans();
    }

    @GetMapping("/loan/user/{email}")
    public List<Loan> getLoanByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getLoans();
    }

    @PostMapping("/loan/user/{email}")
    public Loan saveLoanByUserId(@PathVariable String email, @RequestBody Loan loan){
        User user = userService.getUserByEmail(email).get();
        user.createLoan(loan);
        loan.assignUserToLoan(user);
        return loanService.createLoan(loan);
    }

    @DeleteMapping("loan/{id}")
    public boolean deleteLoan(@PathVariable Long id){
        return loanService.deleteLoan(id);
    }

    @PutMapping("/loan/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable("id") Long id,
                                                       @RequestBody Loan loan){
        loan = loanService.updateLoan(id,loan);
        return ResponseEntity.ok(loan);
    }

}