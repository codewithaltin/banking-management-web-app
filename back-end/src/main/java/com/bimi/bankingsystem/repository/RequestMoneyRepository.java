package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.RequestMoney;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestMoneyRepository extends JpaRepository<RequestMoney, Long> {
}
