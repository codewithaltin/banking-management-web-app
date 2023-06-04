package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.entity.TransferEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransferRepository extends JpaRepository<TransferEntity, Integer> {

}
