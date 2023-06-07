package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.MobilePayment;
import com.bimi.bankingsystem.service.MobilePaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MobilePaymentController {

    private MobilePaymentService mobilePaymentService;

    public MobilePaymentController(MobilePaymentService mobilePaymentService) {
        this.mobilePaymentService = mobilePaymentService;
    }

    @PostMapping("/savingGoal")
    public MobilePayment saveMobilePayments(@RequestBody MobilePayment mobilePayment){
        return mobilePaymentService.addMobilePayment(mobilePayment);
    }

    @GetMapping("/savingGoal")
    public List<MobilePayment> getMobilePayment() {
        return mobilePaymentService.getMobilePayments();
    }

    @GetMapping("/savingGoal/{id}")
    public ResponseEntity<MobilePayment> getMobilePaymentsById(@PathVariable("id") Long id) {
        MobilePayment mobilePayment = null;
        mobilePayment = mobilePaymentService.getMobilePaymentById(id);
        return ResponseEntity.ok(mobilePayment);
    }
    @DeleteMapping("/savingGoal/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMobilePayment(@PathVariable("id") Long id) {
        boolean deleted = false;
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/savingGoal/{id}")
    public ResponseEntity<MobilePayment> updateMobilePayment(@PathVariable("id") Long id,
                                                       @RequestBody MobilePayment mobilePayment){
        mobilePayment = mobilePaymentService.updateMobilePayments(id,mobilePayment);
        return ResponseEntity.ok(mobilePayment);
    }
}
