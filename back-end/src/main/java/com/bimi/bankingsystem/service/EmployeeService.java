package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.model.Loan;
import com.bimi.bankingsystem.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    private EmployeeRepository er;

    public EmployeeService(EmployeeRepository er){ this.er = er;}


    public Employee addEmployee(Employee e){
        return er.save(e);
    }

    public List<Employee> getAllEmployees(){
        return er.findAll();
    }

    public Employee getEmployeeById(Long id){
        return er.findById(id).get();
    }

    public boolean deleteEmployee(Long id ){
       er.deleteById(id);
       return true;
    }
    public Employee updateEmployee(Long id, Employee e){
        Employee employeeEntity =
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

        return er.save(employeeEntity);




    }


}

