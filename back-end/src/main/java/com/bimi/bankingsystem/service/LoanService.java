package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {
    private LoanRepository loanRepository;

    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public Loan createLoan(Loan loan){
        return loanRepository.save(loan);
    }

    public List<Loan> getAllLoans(){
        return loanRepository.findAll();
    }

    public Loan getLoanById(Long id) {
        return loanRepository.findById(id).get();
    }

    public Loan updateLoan(Long id, Loan loan){
        Loan l= loanRepository.findById(id).get();
        l.setFullName(loan.getFullName());
        l.setEmail(loan.getEmail());
        l.setPhoneNumber(loan.getPhoneNumber());
        l.setAddress(loan.getAddress());
        l.setLoanAmount(loan.getLoanAmount());
        l.setMonthlyIncome(loan.getMonthlyIncome());
        l.setPurpouse(loan.getPurpouse());

        return loanRepository.save(l);
    }

    public boolean deleteLoan(Long id){
        loanRepository.deleteById(id);
        return true;
    }
}