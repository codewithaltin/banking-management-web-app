package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.SavingGoal;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.model.User;
import com.bimi.bankingsystem.service.TransferService;
import com.bimi.bankingsystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth/")
public class TransferController {

    private TransferService transferService;

    @Autowired
    private UserServiceImpl userService;

    public TransferController(TransferService transferService, UserServiceImpl userService){
        this.transferService = transferService;
        this.userService = userService;
    }

    //@PostMapping("/transfer")
    public Transfer saveTransfer(@RequestBody Transfer transfer){
        return transferService.saveTransfer(transfer);
    }

    @GetMapping("/transfer")
    public List<Transfer> getAllTransfers() {
        return transferService.getAllTransfers();
    }

    @GetMapping("/transfer/{id}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable("id") Integer id) {
        Transfer transfer = null;
        transfer = transferService.getTransferById(id);
        return ResponseEntity.ok(transfer);
    }

    @DeleteMapping("/transfer/{id}")
    public boolean deleteTransfer(@PathVariable("id") Integer id) {
        return transferService.deleteTransfer(id);
    }



    @PostMapping("/transfer")
    public ResponseEntity<String> performTransfer(@RequestBody Transfer transfer) {
        try {
            // Call the transfer service to perform the transfer
            transferService.transferAmount(transfer);
            saveTransfer(transfer);
            return ResponseEntity.ok("Transferred successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/transfer/{id}")
    public ResponseEntity<Transfer> updateTransfer(@PathVariable("id") Integer id,
                                                   @RequestBody Transfer transfer) {
        transfer = transferService.updateTransfer(id,transfer);
        return ResponseEntity.ok(transfer);
    }

    @PostMapping("/transfer/user/{email}")
    public Transfer saveTransferByUserId(@PathVariable String email, @RequestBody Transfer transfer){
        User user = userService.getUserByEmail(email).get();
        user.addTransfer(transfer);
        transferService.transferAmount(transfer);
        transfer.assignUserToTransfer(user);
        return transferService.saveTransfer(transfer);
    }

    @GetMapping("/transfer/user/{email}")
    public List<Transfer> getTransferByUserId(@PathVariable String email){
        User user = userService.getUserByEmail(email).get();
        return user.getTransfers();
    }

}