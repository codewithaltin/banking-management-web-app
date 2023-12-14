package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.config.JwtService;
import com.bimi.bankingsystem.model.Ndertesa;
import com.bimi.bankingsystem.model.Ashensori;
import com.bimi.bankingsystem.service.NdertesaService;
import com.bimi.bankingsystem.service.AshensoriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class NdertesaController {


    private NdertesaService ndertesaService;

    public NdertesaController(NdertesaService ndertesaService) {
        this.ndertesaService = ndertesaService;
    }
    @PostMapping("/ndertesa")
    public Ndertesa createndertesa(@RequestBody Ndertesa e){
        return ndertesaService.addNdertesa(e);
    }

    @GetMapping("/ndertesa")
    public ResponseEntity<List<Ndertesa>> getAllndertesas(){
        return ResponseEntity.ok(ndertesaService.getAllNdertesa());
    }
    @GetMapping("/ndertesa/{id}")
    public ResponseEntity<Ndertesa> getndertesaById(@PathVariable("id") Long id) {
        Ndertesa e = null;
        e = ndertesaService.getNdertesaById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/ndertesa/{id}")
    public boolean deletendertesa(@PathVariable Long id){
        return ndertesaService.deleteNdertesa(id);
    }

    @PutMapping("/ndertesa/{id}")
    public Ndertesa updatendertesa(@PathVariable Long id, @RequestBody Ndertesa e) {
        return ndertesaService.updateNdertesa(id,e);

    }
}