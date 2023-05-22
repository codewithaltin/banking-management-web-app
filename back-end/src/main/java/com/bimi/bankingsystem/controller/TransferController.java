package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.entity.TransferEntity;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.service.TransferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TransferController {

    private TransferService transferService;

    public TransferController(TransferService transferService){this.transferService = transferService;}

    @PostMapping("/transfer")
    public Transfer saveTransfer(@RequestBody Transfer transfer){
        return transferService.saveTransfer(transfer);
    }

    @GetMapping("/transfer")
    public List<TransferEntity> getAllTransfers() {
        return transferService.getAllTransfers();
    }

    @GetMapping("/transfer/{id}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable("id") Integer id) {
        Transfer transfer = null;
        transfer = transferService.getTransferById(id);
        return ResponseEntity.ok(transfer);
    }

}
