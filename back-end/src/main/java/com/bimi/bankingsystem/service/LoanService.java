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

    public Loan updateLoan(Integer id, Loan loan){
        Loan loan1= loanRepository.findById(id).get();
        loan1.setFullName(loan.getFullName());
        loan1.setEmail(loan.getEmail());
        loan1.setPhoneNumber(loan.getPhoneNumber());
        loan1.setAddress(loan.getAddress());
        loan1.setLoanAmount(loan.getLoanAmount());
        loan1.setMonthlyIncome(loan.getMonthlyIncome());
        loan1.setPurpouse(loan.getPurpouse());

        return loanRepository.save(loan1);
    }

    public boolean deleteLoan(Integer id){
        loanRepository.deleteById(id);
        return true;
    }
}
