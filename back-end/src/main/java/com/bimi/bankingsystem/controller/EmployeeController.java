package com.bimi.bankingsystem.controller;


import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/employee")
    public Employee saveEmployee(@RequestBody Employee e) {
        return employeeService.addEmployee(e);
    }

    @GetMapping("/employee")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
        Employee e = null;
        e = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(e);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        boolean deleted = false;
        deleted = employeeService.deleteEmployee(id);

        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/epmloyee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id,
                                           @RequestBody Employee e) {
        e = employeeService.updateEmployee(id,e);
        return ResponseEntity.ok(e);
    }

}