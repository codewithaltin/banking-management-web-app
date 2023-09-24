package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.InstitutionPaymentService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class InstitutionPaymentController {

    private InstitutionPaymentService institutionPaymentService;

    private UserServiceImpl userService;

    public InstitutionPaymentController(InstitutionPaymentService institutionPaymentService, UserServiceImpl userService) {
        this.institutionPaymentService = institutionPaymentService;
        this.userService = userService;
    }
    @PostMapping("/institutionPayments")
    public InstitutionPayment saveInstitutionPayments(@RequestBody InstitutionPayment institutionPayment){
        return institutionPaymentService.addInstitutionPayment(institutionPayment);
    }

    @GetMapping("/institutionPayments")
    public List<InstitutionPayment> getInstitutionPayments() {
        return institutionPaymentService.getInstitutionPayments();
    }

    @GetMapping("/institutionPayments/{id}")
    public ResponseEntity<InstitutionPayment> getInstitutionPaymentsById(@PathVariable("id") Long id) {
        InstitutionPayment institutionPayment = null;
        institutionPayment = institutionPaymentService.getInstitutionPaymentsById(id);
        return ResponseEntity.ok(institutionPayment);
    }
    @DeleteMapping("/institutionPayments/{id}")
    public boolean deleteSavingGoal(@PathVariable("id") Long id) {
        return institutionPaymentService.deleteInstitutionPayments(id);
    }

    @PutMapping("/institutionPayments/{id}")
    public ResponseEntity<InstitutionPayment> updateInstitutionPayment(@PathVariable("id") Long id,
                                                       @RequestBody InstitutionPayment institutionPayments){
        institutionPayments = institutionPaymentService.updateInstitutionPayments(id,institutionPayments);
        return ResponseEntity.ok(institutionPayments);
    }


    @PostMapping("/institutionPayments/user/{email}")
    public InstitutionPayment saveInstitutionPaymentByUserId(@PathVariable String email, @RequestBody InstitutionPayment institutionPayment){
        User user = userService.getUserByEmail(email).get();
        user.addInstitutionPayment(institutionPayment);
        institutionPayment.assignUserToInstitutionPayment(user);
        return institutionPaymentService.addInstitutionPayment(institutionPayment);
    }

    @GetMapping("/institutionPayments/user/{email}")
    public List<InstitutionPayment> getInstitutionPaymentByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getInstitutionPayments();
    }

    public ResponseEntity<String> processPayment(
            @RequestParam("userId") long userId,
            @RequestParam("paymentAmount") int paymentAmount) {
        try {
            institutionPaymentService.processPayment(userId, paymentAmount);
            return ResponseEntity.ok("Payment processed successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient balance");
        }
    }


}
