package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.config.JwtService;
import com.bimi.bankingsystem.model.Banka;
import com.bimi.bankingsystem.model.Personi;
import com.bimi.bankingsystem.service.BankaService;
import com.bimi.bankingsystem.service.PersoniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class BankaController {


    private BankaService bankaService;

    public BankaController(BankaService bankaService) {
        this.bankaService = bankaService;
    }
    @PostMapping("/banka")
    public Banka createbanka(@RequestBody Banka e){
        return bankaService.addBanka(e);
    }

    @GetMapping("/banka")
    public ResponseEntity<List<Banka>> getAllbankas(){
        return ResponseEntity.ok(bankaService.getAllBanka());
    }
    @GetMapping("/banka/{id}")
    public ResponseEntity<Banka> getbankaById(@PathVariable("id") Long id) {
        Banka e = null;
        e = bankaService.getBankaById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/banka/{id}")
    public boolean deletebanka(@PathVariable Long id){
        return bankaService.deleteBanka(id);
    }

    @PutMapping("/banka/{id}")
    public Banka updatebanka(@PathVariable Long id, @RequestBody Banka e) {
        return bankaService.updateBanka(id,e);

    }



}
