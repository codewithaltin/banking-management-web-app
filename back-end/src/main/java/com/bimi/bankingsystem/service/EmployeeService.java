package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Employee;
import com.bimi.bankingsystem.repository.EmployeeRepository;
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
        Employee employee =
                er.findById(id).get();
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setAddress(e.getAddress());
        employee.setEmail(e.getEmail());
        employee.setPhoneNumber(e.getPhoneNumber());
        employee.setDepartment(e.getDepartment());
        employee.setJobTitle(e.getJobTitle());
        employee.setSalary(e.getSalary());
        employee.setStartDate(e.getStartDate());
        employee.setEndDate(e.getEndDate());

        return er.save(employee);

    }


}

