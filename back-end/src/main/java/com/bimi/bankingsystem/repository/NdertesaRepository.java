package com.bimi.bankingsystem.repository;

import com.bimi.bankingsystem.model.Ndertesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NdertesaRepository extends JpaRepository<Ndertesa, Long> {
}
