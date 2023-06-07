package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.PrePaidPayment;
import com.bimi.bankingsystem.service.PrePaidPaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PrePaidPaymentController {

    private PrePaidPaymentService prePaidPaymentService;

    public PrePaidPaymentController(PrePaidPaymentService prePaidPaymentService) {
        this.prePaidPaymentService = prePaidPaymentService;
    }

    @PostMapping("/prePaidPayment")
    public PrePaidPayment savePrePaidPayment(@RequestBody PrePaidPayment prePaidPayment){
        return prePaidPaymentService.addPrePaidPayment(prePaidPayment);
    }

    @GetMapping("/prePaidPayment")
    public List<PrePaidPayment> getPrePaidPayments() {
        return prePaidPaymentService.getPrePaidPayment();
    }

    @GetMapping("/prePaidPayment/{id}")
    public ResponseEntity<PrePaidPayment> getPrePaidPaymentsById(@PathVariable("id") Long id) {
        PrePaidPayment savingGoal = null;
        savingGoal = prePaidPaymentService.getPrePaidPaymentById(id);
        return ResponseEntity.ok(savingGoal);
    }
    @DeleteMapping("/prePaidPayment/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePrePaidPayment(@PathVariable("id") Long id) {
        boolean deleted = false;
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/prePaidPayment/{id}")
    public ResponseEntity<PrePaidPayment> updatePrePaidPayment(@PathVariable("id") Long id,
                                                       @RequestBody PrePaidPayment prePaidPayment){
        prePaidPayment = prePaidPaymentService.updatePrePaidPayments(id,prePaidPayment);
        return ResponseEntity.ok(prePaidPayment);
    }
}
