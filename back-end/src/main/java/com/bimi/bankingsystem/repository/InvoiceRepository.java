package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer>{
}
