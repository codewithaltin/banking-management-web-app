package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.*;
import com.bimi.bankingsystem.service.NdertesaService;
import com.bimi.bankingsystem.service.AshensoriService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class AshensoriController {


    private AshensoriService ashensoriService;

    private NdertesaService ndertesaService;

    public AshensoriController(AshensoriService ashensoriService, NdertesaService ndertesaService) {
        this.ashensoriService = ashensoriService;
        this.ndertesaService = ndertesaService;
    }
    @PostMapping("/ashensori")
    public Ashensori createEmployee(@RequestBody Ashensori e){
        return ashensoriService.addAshensor(e);
    }

    @GetMapping("/ashensori")
    public ResponseEntity<List<Ashensori>> getAllEmployees(){
        return ResponseEntity.ok(ashensoriService.getAllAshensor());
    }
    @GetMapping("/ashensori/{id}")
    public ResponseEntity<Ashensori> getEmployeeById(@PathVariable("id") Long id) {
        Ashensori e = null;
        e = ashensoriService.getAshensorById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/ashensori/{id}")
    public boolean deleteEmployee(@PathVariable Long id){
        return ashensoriService.deleteAshensor(id);
    }

    @PutMapping("/ashensori/{id}")
    public Ashensori updateEmployee(@PathVariable Long id, @RequestBody Ashensori e) {
        return ashensoriService.updateAshensor(id,e);

    }

    @PostMapping("/ashensori/ndertesa/{id}")
    public Ashensori saveSavingGoalByUserId(@PathVariable Long id, @RequestBody Ashensori ashensori){
        Ndertesa user = ndertesaService.getNdertesaById(id);
        user.addAshensori(ashensori);
        ashensori.assignNdertesa(user);
        return ashensoriService.addAshensor(ashensori);
    }

    @GetMapping("/ashensori/ndertesa/{id}")
    public List<Ashensori> getSavingGoalsByUserId(@PathVariable Long id){
        Ndertesa user = ndertesaService.getNdertesaById(id);
        return user.getAshensorat();
    }

}
