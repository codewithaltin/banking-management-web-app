package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.service.LoanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
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

    @PutMapping("loan/{id}")
    public Loan updateClient(@PathVariable Integer id,@RequestBody Loan loan){
        return loanService.updateLoan(id,loan);
    }

    @DeleteMapping("loan/{id}")
    public boolean deleteLoan(@PathVariable Integer id){
        return loanService.deleteLoan(id);
    }

}
