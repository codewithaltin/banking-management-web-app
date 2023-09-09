package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.entity.TransferEntity;
import com.bimi.bankingsystem.model.Transfer;
import com.bimi.bankingsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransferRepository extends JpaRepository<Transfer, Integer> {
}
