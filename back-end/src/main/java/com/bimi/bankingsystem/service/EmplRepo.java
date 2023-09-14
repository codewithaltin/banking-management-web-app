package com.bimi.bankingsystem.service;

import com.bimi.bankingsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmplRepo extends JpaRepository<Employee, Long> {
}
