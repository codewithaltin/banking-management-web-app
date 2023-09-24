package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.PrePaidPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrePaidPaymentRepository extends JpaRepository<PrePaidPayment, Long> {
}
