package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Banka;
import com.bimi.bankingsystem.model.Personi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankaRepository extends JpaRepository<Banka, Long> {
}
