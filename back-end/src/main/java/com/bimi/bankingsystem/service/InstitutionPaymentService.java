package com.bimi.bankingsystem.service;


import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.repository.InstitutionPaymentRepository;
import com.bimi.bankingsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionPaymentService {

    private InstitutionPaymentRepository institutionPaymentRepository;
    private UserServiceImpl userService;
    private UserRepository userRepository;

    public InstitutionPaymentService(InstitutionPaymentRepository institutionPaymentRepository, UserServiceImpl userService, UserRepository userRepository){ this.institutionPaymentRepository = institutionPaymentRepository;
        this.userService = userService;
        this.userRepository = userRepository;
    }


    public InstitutionPayment addInstitutionPayment(InstitutionPayment institutionPayment){
        return institutionPaymentRepository.save(institutionPayment);
    }

    public List<InstitutionPayment> getInstitutionPayments(){
        return institutionPaymentRepository.findAll();
    }

    public InstitutionPayment getInstitutionPaymentsById(Long id){
        return institutionPaymentRepository.findById(id).get();
    }

    public boolean deleteInstitutionPayments(Long id ){
        institutionPaymentRepository.deleteById(id);
        return true;
    }
    public InstitutionPayment updateInstitutionPayments(Long id, InstitutionPayment e){
        InstitutionPayment institutionPayment =
                institutionPaymentRepository.findById(id).get();
        institutionPayment.setInstitution(e.getInstitution());
        institutionPayment.setCompany(e.getCompany());
        institutionPayment.setReferenceNumber(e.getReferenceNumber());
        institutionPayment.setAmount(e.getAmount());

        return institutionPaymentRepository.save(institutionPayment);

    }

        public void processPayment(long userId, int paymentAmount) {
            // Fetch the user's current balance
            User user = userRepository.findById(userId);

            double senderCurrentBalance = user.getBalance();

            if (senderCurrentBalance >= paymentAmount) {
                // Sufficient balance, deduct the payment amount
                double newBalance = senderCurrentBalance - paymentAmount;

                // Update the user's balance
                user.setBalance(newBalance);
                userRepository.save(user); // Save the updated user entity
            } else {
                // Insufficient balance, handle this scenario (e.g., throw an exception)
                throw new IllegalArgumentException("Insufficient balance");
            }
        }




}
