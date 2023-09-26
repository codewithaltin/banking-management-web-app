package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.*;
import com.bimi.bankingsystem.service.BankaService;
import com.bimi.bankingsystem.service.PersoniService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class PersoniController {


    private PersoniService employeeService;

    private BankaService bankaService;

    public PersoniController(PersoniService employeeService, BankaService bankaService) {
        this.employeeService = employeeService;
        this.bankaService = bankaService;
    }
    @PostMapping("/personi")
    public Personi createEmployee(@RequestBody Personi e){
        return employeeService.addPerson(e);
    }

    @GetMapping("/personi")
    public ResponseEntity<List<Personi>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.getAllPerson());
    }
    @GetMapping("/personi/{id}")
    public ResponseEntity<Personi> getEmployeeById(@PathVariable("id") Long id) {
        Personi e = null;
        e = employeeService.getPersonById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/personi/{id}")
    public boolean deleteEmployee(@PathVariable Long id){
        return employeeService.deletePerson(id);
    }

    @PutMapping("/personi/{id}")
    public Personi updateEmployee(@PathVariable Long id, @RequestBody Personi e) {
        return employeeService.updatePerson(id,e);

    }

    @PostMapping("/personi/banka/{id}")
    public Personi saveSavingGoalByUserId(@PathVariable Long id, @RequestBody Personi personi){
        Banka user = bankaService.getBankaById(id);
        user.addPersoni(personi);
        personi.assignBanka(user);
        return employeeService.addPerson(personi);
    }

    @GetMapping("/personi/banka/{id}")
    public List<Personi> getSavingGoalsByUserId(@PathVariable Long id){
        Banka user = bankaService.getBankaById(id);
        return user.getPersonat();
    }

}
