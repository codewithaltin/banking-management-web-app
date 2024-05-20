package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Personi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersoniRepository extends JpaRepository<Personi, Long> {
}
