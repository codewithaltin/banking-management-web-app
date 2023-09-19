package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.PrePaidPayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.PrePaidPaymentService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class PrePaidPaymentController {

    private PrePaidPaymentService prePaidPaymentService;

    private UserServiceImpl userService;

    public PrePaidPaymentController(PrePaidPaymentService prePaidPaymentService, UserServiceImpl userService) {
        this.prePaidPaymentService = prePaidPaymentService;
        this.userService = userService;
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
    public boolean deletePrePaidPayment(@PathVariable("id") Long id) {
        return prePaidPaymentService.deletePrePaidPayments(id);
    }

    @PutMapping("/prePaidPayment/{id}")
    public ResponseEntity<PrePaidPayment> updatePrePaidPayment(@PathVariable("id") Long id,
                                                       @RequestBody PrePaidPayment prePaidPayment){
        prePaidPayment = prePaidPaymentService.updatePrePaidPayments(id,prePaidPayment);
        return ResponseEntity.ok(prePaidPayment);
    }

    @PostMapping("/prePaidPayment/user/{email}")
    public PrePaidPayment savePrePaidPaymentByUserId(@PathVariable String email, @RequestBody PrePaidPayment prePaidPayment){
        User user = userService.getUserByEmail(email).get();
        user.addPrePaidPayment(prePaidPayment);
        prePaidPayment.assignUserToPrePaidPayment(user);
        return prePaidPaymentService.addPrePaidPayment(prePaidPayment);
    }

    @GetMapping("/prePaidPayment/user/{email}")
    public List<PrePaidPayment> getMobilePaymentByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getPrePaidPayments();
    }
}
