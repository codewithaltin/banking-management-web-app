package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Ashensori;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AshensoriRepository extends JpaRepository<Ashensori, Long> {
}
