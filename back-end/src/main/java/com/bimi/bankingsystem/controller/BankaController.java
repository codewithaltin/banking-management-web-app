package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.config.JwtService;
import com.bimi.bankingsystem.model.Banka;
import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.model.Personi;
import com.bimi.bankingsystem.service.BankaService;
import com.bimi.bankingsystem.service.EmployeeService;
import com.bimi.bankingsystem.service.PersoniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class BankaController {


    private BankaService employeeService;

    public BankaController(BankaService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/banka")
    public Banka createEmployee(@RequestBody Banka e){
        return employeeService.addBanka(e);
    }

    @GetMapping("/banka")
    public ResponseEntity<List<Banka>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.getAllBanka());
    }
    @GetMapping("/banka/{id}")
    public ResponseEntity<Banka> getEmployeeById(@PathVariable("id") Long id) {
        Banka e = null;
        e = employeeService.getBankaById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/banka/{id}")
    public boolean deleteEmployee(@PathVariable Long id){
        return employeeService.deleteBanka(id);
    }

    @PutMapping("/banka/{id}")
    public Banka updateEmployee(@PathVariable Long id, @RequestBody Banka e) {
        return employeeService.updateBanka(id,e);

    }



}
