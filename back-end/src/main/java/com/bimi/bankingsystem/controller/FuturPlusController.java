package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.FuturPlus;
import com.bimi.bankingsystem.service.FuturPlusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FuturPlusController {
    private FuturPlusService futurPlusService;

    public FuturPlusController(FuturPlusService futurPlusService) {
        this.futurPlusService = futurPlusService;
    }

    @PostMapping("/futurPlus")
    public FuturPlus saveFuturPlus(@RequestBody FuturPlus futurPlus){
        return futurPlusService.addFuturPlus(futurPlus);
    }

    @GetMapping("/futurPlus")
    public List<FuturPlus> getAllFuturPlus() {
        return futurPlusService.getFuturPlus();
    }

    @GetMapping("/futurPlus/{id}")
    public ResponseEntity<FuturPlus> getFuturPlusById(@PathVariable("id") Long id) {
        FuturPlus futurPlus = null;
        futurPlus = futurPlusService.getFuturPlusById(id);
        return ResponseEntity.ok(futurPlus);
    }

    @DeleteMapping("/futurPlus/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteFuturPlus(@PathVariable("id") Long id) {
        boolean deleted = false;
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/futurPlus/{id}")
    public ResponseEntity<FuturPlus> updateFuturPlus(@PathVariable("id") Long id,
                                                       @RequestBody FuturPlus futurPlus){
        futurPlus = futurPlusService.updateFuturPlus(id,futurPlus);
        return ResponseEntity.ok(futurPlus);
    }
}
