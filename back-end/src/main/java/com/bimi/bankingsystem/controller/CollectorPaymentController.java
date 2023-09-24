package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.CollectorPayment;
import com.bimi.bankingsystem.model.InstitutionPayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.CollectorPaymentService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class CollectorPaymentController {

    private CollectorPaymentService collectorPaymentService;
    private UserServiceImpl userService;

    public CollectorPaymentController(CollectorPaymentService collectorPaymentService, UserServiceImpl userService) {
        this.collectorPaymentService = collectorPaymentService;
        this.userService = userService;
    }

    @PostMapping("/collectorPayment")
    public CollectorPayment saveCollectorPayment(@RequestBody CollectorPayment collectorPayment){
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

    @PostMapping("/collectorPayment/user/{email}")
    public CollectorPayment saveCollectorPaymentByUserId(@PathVariable String email, @RequestBody CollectorPayment collectorPayment){
        User user = userService.getUserByEmail(email).get();
        user.addCollectorPayment(collectorPayment);
        collectorPayment.assignUserToCollectorPayment(user);
        return collectorPaymentService.addCollectorPayment(collectorPayment);
    }

    @GetMapping("/collectorPayment/user/{email}")
    public List<CollectorPayment> getCollectorPaymentByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getCollectorPayments();
    }



}
