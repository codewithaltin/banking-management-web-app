package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.MobilePayment;
import org.hibernate.sql.exec.spi.JdbcCallParameterExtractor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MobilePaymentRepository extends JpaRepository<MobilePayment, Long> {
}
