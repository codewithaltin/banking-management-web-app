package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.MobilePayment;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.MobilePaymentService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class MobilePaymentController {

    private MobilePaymentService mobilePaymentService;

    private UserServiceImpl userService;
    public MobilePaymentController(MobilePaymentService mobilePaymentService, UserServiceImpl userService) {
        this.mobilePaymentService = mobilePaymentService;
        this.userService = userService;
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


    @PostMapping("/mobilePayment/user/{email}")
    public MobilePayment saveInstitutionPaymentByUserId(@PathVariable String email, @RequestBody MobilePayment mobilePayment){
        User user = userService.getUserByEmail(email).get();
        user.addMobilePayment(mobilePayment);
        mobilePayment.assignUserToMobilePayment(user);
        return mobilePaymentService.addMobilePayment(mobilePayment);
    }

    @GetMapping("/mobilePayment/user/{email}")
    public List<MobilePayment> getMobilePaymentByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getMobilePayments();
    }


}
