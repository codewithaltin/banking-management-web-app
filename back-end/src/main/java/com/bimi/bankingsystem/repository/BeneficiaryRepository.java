package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Beneficiary;
import com.bimi.bankingsystem.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary,Integer>{
}
