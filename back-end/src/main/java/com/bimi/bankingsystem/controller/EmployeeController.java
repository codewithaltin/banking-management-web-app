package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    private  EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/employee")
    public Employee createLoan(@RequestBody Employee e){
        return employeeService.addEmployee(e);
    }

    @GetMapping("/employee")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employee/{id}")
    public boolean deleteEmployee(@PathVariable Long id){
        return employeeService.deleteEmployee(id);
    }

    @PutMapping("/employee/{id}")
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee e) {
        return employeeService.updateEmployee(id,e);

    }


}