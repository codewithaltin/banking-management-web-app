package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.CollectorPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectorPaymentRepository extends JpaRepository<CollectorPayment, Long> {
}
