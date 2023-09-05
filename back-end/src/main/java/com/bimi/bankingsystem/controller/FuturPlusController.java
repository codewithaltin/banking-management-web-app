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
    public List<FuturPlus> getFuturPlusById(@PathVariable("id") Long id) {
        FuturPlus futurPlus = null;
        futurPlus = futurPlusService.getFuturPlusById(id);
        return futurPlusService.getFuturPlus();
    }

    @DeleteMapping("/futurPlus/{id}")
    public boolean deleteFuturPlus(@PathVariable Long id){
        return futurPlusService.deleteFuturPlus(id);
    }

    @PutMapping("/futurPlus/{id}")
    public FuturPlus updateFuturPlus(@PathVariable("id") Long id,@RequestBody FuturPlus futurPlus){
        return futurPlusService.updateFuturPlus(id,futurPlus);
    }
}
