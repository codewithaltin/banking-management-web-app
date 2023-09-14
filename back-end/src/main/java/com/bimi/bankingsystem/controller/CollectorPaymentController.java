package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.CollectorPayment;
import com.bimi.bankingsystem.service.CollectorPaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class CollectorPaymentController {

    private CollectorPaymentService collectorPaymentService;

    public CollectorPaymentController(CollectorPaymentService collectorPaymentService) {
        this.collectorPaymentService = collectorPaymentService;
    }

    @PostMapping("/collectorPayment")
    public CollectorPayment saveControllerPayment(@RequestBody CollectorPayment collectorPayment){
        return collectorPaymentService.addCollectorPayment(collectorPayment);
    }

    @GetMapping("/collectorPayment")
    public List<CollectorPayment> getAllCollectorPayments() {
        return collectorPaymentService.getCollectorPayments();
    }

    @GetMapping("/collectorPayment/{id}")
    public ResponseEntity<CollectorPayment> getCollectorPaymentsById(@PathVariable("id") Long id) {
        CollectorPayment collectorPayment = null;
        collectorPayment = collectorPaymentService.getCollectorPaymentById(id);
        return ResponseEntity.ok(collectorPayment);
    }
    @DeleteMapping("/collectorPayment/{id}")
    public boolean deleteCollectorPayment(@PathVariable("id") Long id) {
        return collectorPaymentService.deleteCollectorPayments(id);
    }

    @PutMapping("/collectorPayment/{id}")
    public ResponseEntity<CollectorPayment> updateCollectorPayment(@PathVariable("id") Long id,
                                                       @RequestBody CollectorPayment collectorPayment){
        collectorPayment = collectorPaymentService.updateCollectorPayments(id,collectorPayment);
        return ResponseEntity.ok(collectorPayment);
    }
}
