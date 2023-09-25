package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Personi extends JpaRepository<com.bimi.bankingsystem.model.Personi, Long> {
}
