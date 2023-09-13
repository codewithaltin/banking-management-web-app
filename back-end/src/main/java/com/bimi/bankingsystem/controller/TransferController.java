package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.entity.TransferEntity;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.service.TransferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TransferController {

    private TransferService transferService;

    public TransferController(TransferService transferService){this.transferService = transferService;}

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

}