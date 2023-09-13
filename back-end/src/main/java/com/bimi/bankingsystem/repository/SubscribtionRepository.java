package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Subscribtion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribtionRepository extends JpaRepository<Subscribtion, Long> {
}
