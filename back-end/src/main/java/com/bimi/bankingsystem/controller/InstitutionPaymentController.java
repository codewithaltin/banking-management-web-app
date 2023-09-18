package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.InstitutionPaymentService;
import com.bimi.bankingsystem.service.UserServiceImpl;
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


    @PostMapping("/institutionPayments/user/{userId}")
    public InstitutionPayment saveInstitutionPaymentByUserId(@PathVariable Long userId, @RequestBody InstitutionPayment institutionPayment){
        User user = userService.getUserById(userId).get();
        user.addInstitutionPayment(institutionPayment);
        institutionPayment.assignUserToInstitutionPayment(user);
        return institutionPaymentService.addInstitutionPayment(institutionPayment);
    }

    @GetMapping("/institutionPayments/user/{userId}")
    public List<InstitutionPayment> getInstitutionPaymentByUserId(@PathVariable Long userId){
        User user = userService.getUserById(userId).get();
        return user.getInstitutionPayments();
    }



}
