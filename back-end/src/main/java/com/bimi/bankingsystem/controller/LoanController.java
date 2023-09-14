package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.service.LoanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/auth")
public class LoanController {
    private LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService=loanService;
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

    @DeleteMapping("/loan/{id}")
    public boolean deleteLoan(@PathVariable Long id){
        return loanService.deleteLoan(id);
    }

    @PutMapping("/loan/{id}")
    public ResponseEntity<Loan> updateLoan(@PathVariable ("id") Long id,
                                           @RequestBody Loan loan){
        loan = loanService.updateLoan(id,loan);
        return ResponseEntity.ok(loan);
    }

}