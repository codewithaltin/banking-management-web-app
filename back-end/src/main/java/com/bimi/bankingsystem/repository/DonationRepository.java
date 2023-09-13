package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends JpaRepository<Donation,Long> {
}