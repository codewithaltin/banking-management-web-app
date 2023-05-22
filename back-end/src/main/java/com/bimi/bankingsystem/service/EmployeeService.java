package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.entity.ContactEntity;
import com.bimi.bankingsystem.entity.EmployeeEntity;
import com.bimi.bankingsystem.model.Contact;
import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.stream.Collectors;

public class EmployeeService {

    private EmployeeRepository er;

    public EmployeeService(EmployeeRepository er){ this.er = er;}


    public EmployeeEntity addEmployee(EmployeeEntity employeeEntity){
        return er.save(employeeEntity);
    }

    public Employee saveEmployee(Employee e ){
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(e,employeeEntity);
        er.save(employeeEntity);
        return e;
    }
    public List<EmployeeEntity> getAllEmployees(){
        List<EmployeeEntity> employeeEntities = er.findAll();
        List<EmployeeEntity> employees = employeeEntities.stream().map(e -> new EmployeeEntity(
                e.getId(),
                e.getFirstName(),
                e.getLastName(),
                e.getEmail(),
                e.getPhoneNumber(),
                e.getAddress(),
                e.getDepartment(),
                e.getJobTitle(),
                e.getSalary(),
                e.getStartDate(),
                e.getEndDate()
                )).collect(Collectors.toList());

        return employees;
    }
    public Employee getEmployeeById(Long id){
        EmployeeEntity employeeEntity = er.findById(id).get();
        Employee e  = new Employee();
        BeanUtils.copyProperties(employeeEntity,e);
        return e;
    }

    public boolean deleteEmployee(Long id ){
        EmployeeEntity e = er.findById(id).get();
        er.delete(e);
        return true;
    }
    public Employee updateEmployee(Long id, Employee e){
        EmployeeEntity employeeEntity =
                er.findById(id).get();
        employeeEntity.setFirstName(e.getFirstName());
        employeeEntity.setLastName(e.getLastName());
        employeeEntity.setAddress(e.getAddress());
        employeeEntity.setEmail(e.getEmail());
        employeeEntity.setPhoneNumber(e.getPhoneNumber());
        employeeEntity.setDepartment(e.getDepartment());
        employeeEntity.setJobTitle(e.getJobTitle());
        employeeEntity.setSalary(e.getSalary());
        employeeEntity.setStartDate(e.getStartDate());
        employeeEntity.setEndDate(e.getEndDate());

        er.save(employeeEntity);

        return  e;


    }


}

