package com.bimi.bankingsystem.controller;

import com.bimi.bankingsystem.exception.UnauthorizedException;
import com.bimi.bankingsystem.config.JwtService;
import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.service.EmployeeService;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    private EmployeeService employeeService;
    @Autowired
    private JwtService jwtService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/employee")
    public Employee createLoan(@RequestBody Employee e){
        return employeeService.addEmployee(e);
    }

    @GetMapping("/employee")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        //TODO here is where the authorization is happening
        if(!jwtService.getRoles("USER")){
            throw new UnauthorizedException("Unauthorized user");
        }

        return ResponseEntity.ok(employeeService.getAllEmployees());
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