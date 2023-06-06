package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.service.InstitutionPaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class InstitutionPaymentController {

    private InstitutionPaymentService institutionPaymentService;

    public InstitutionPaymentController(InstitutionPaymentService institutionPaymentService) {
        this.institutionPaymentService = institutionPaymentService;
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
    public ResponseEntity<Map<String,Boolean>> deleteSavingGoal(@PathVariable("id") Long id) {
        boolean deleted = false;
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/institutionPayments/{id}")
    public ResponseEntity<InstitutionPayment> updateInstitutionPayment(@PathVariable("id") Long id,
                                                       @RequestBody InstitutionPayment institutionPayments){
        institutionPayments = institutionPaymentService.updateInstitutionPayments(id,institutionPayments);
        return ResponseEntity.ok(institutionPayments);
    }
}
