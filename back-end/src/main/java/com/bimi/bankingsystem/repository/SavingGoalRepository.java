package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.SavingGoal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingGoalRepository extends JpaRepository<SavingGoal, Long> {
}
