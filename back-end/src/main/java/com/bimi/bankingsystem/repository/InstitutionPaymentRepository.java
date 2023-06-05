package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.InstitutionPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstitutionPaymentRepository extends JpaRepository<InstitutionPayment, Long> {
}
