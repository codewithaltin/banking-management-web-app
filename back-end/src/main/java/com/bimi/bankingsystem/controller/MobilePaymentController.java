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
@RequestMapping("/api/v1/auth/")
public class MobilePaymentController {

    private MobilePaymentService mobilePaymentService;

    public MobilePaymentController(MobilePaymentService mobilePaymentService) {
        this.mobilePaymentService = mobilePaymentService;
    }

    @PostMapping("/mobilePayment")
    public MobilePayment saveMobilePayments(@RequestBody MobilePayment mobilePayment){
        return mobilePaymentService.addMobilePayment(mobilePayment);
    }

    @GetMapping("/mobilePayment")
    public List<MobilePayment> getMobilePayment() {
        return mobilePaymentService.getMobilePayments();
    }

    @GetMapping("/mobilePayment/{id}")
    public ResponseEntity<MobilePayment> getMobilePaymentsById(@PathVariable("id") Long id) {
        MobilePayment mobilePayment = null;
        mobilePayment = mobilePaymentService.getMobilePaymentById(id);
        return ResponseEntity.ok(mobilePayment);
    }
    @DeleteMapping("/mobilePayment/{id}")
    public boolean deleteMobilePayment(@PathVariable("id") Long id) {
        return mobilePaymentService.deleteMobilePayments(id);
    }

    @PutMapping("/mobilePayment/{id}")
    public ResponseEntity<MobilePayment> updateMobilePayment(@PathVariable("id") Long id,
                                                       @RequestBody MobilePayment mobilePayment){
        mobilePayment = mobilePaymentService.updateMobilePayments(id,mobilePayment);
        return ResponseEntity.ok(mobilePayment);
    }
}
